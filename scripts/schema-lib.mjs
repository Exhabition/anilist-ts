import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  buildClientSchema,
  getIntrospectionQuery,
  isEnumType,
  isInputObjectType,
  isObjectType,
  isScalarType,
  isUnionType,
} from 'graphql';
import { coverageColor, renderBadge } from './badge-lib.mjs';

const ROOT_DIRECTORY = path.resolve(import.meta.dirname, '..');
const SOURCE_METADATA = path.join(ROOT_DIRECTORY, 'schema', 'source.json');
const INTROSPECTION_SNAPSHOT = path.join(ROOT_DIRECTORY, 'schema', 'introspection.json');

function byName(left, right) {
  return left.name.localeCompare(right.name);
}

function description(value) {
  return value ?? '';
}

function deprecated(value) {
  return value.deprecationReason != null;
}

function argumentManifest(argument) {
  return {
    name: argument.name,
    type: String(argument.type),
    description: description(argument.description),
    deprecated: deprecated(argument),
  };
}

function fieldManifest(field, input = false) {
  const result = {
    name: field.name,
    type: String(field.type),
    description: description(field.description),
    deprecated: deprecated(field),
  };
  if (!input) result.args = field.args.map(argumentManifest).sort(byName);
  return result;
}

function typeManifest(type, kind) {
  if (kind === 'SCALAR') return { name: type.name };
  if (kind === 'ENUM') {
    return {
      name: type.name,
      description: description(type.description),
      values: type
        .getValues()
        .map((value) => ({
          name: value.name,
          description: description(value.description),
          deprecated: deprecated(value),
        }))
        .sort(byName),
    };
  }
  if (kind === 'INPUT_OBJECT') {
    return {
      name: type.name,
      description: description(type.description),
      fields: Object.values(type.getFields())
        .map((field) => fieldManifest(field, true))
        .sort(byName),
    };
  }
  if (kind === 'OBJECT') {
    return {
      name: type.name,
      description: description(type.description),
      fields: Object.values(type.getFields())
        .map((field) => fieldManifest(field))
        .sort(byName),
    };
  }
  return {
    name: type.name,
    description: description(type.description),
    members: type
      .getTypes()
      .map((member) => member.name)
      .sort(),
  };
}

function sortedCopy(values) {
  return values ? [...values].sort(byName) : values;
}

export function normalizeIntrospection(introspection) {
  const snapshot = structuredClone(introspection);
  snapshot.__schema.types = sortedCopy(snapshot.__schema.types);
  snapshot.__schema.directives = sortedCopy(snapshot.__schema.directives);
  for (const type of snapshot.__schema.types) {
    type.fields = sortedCopy(type.fields);
    type.inputFields = sortedCopy(type.inputFields);
    type.enumValues = sortedCopy(type.enumValues);
    type.possibleTypes = sortedCopy(type.possibleTypes);
    for (const field of type.fields ?? []) field.args = sortedCopy(field.args);
  }
  for (const directive of snapshot.__schema.directives ?? []) directive.args = sortedCopy(directive.args);
  return snapshot;
}

export async function fetchLiveIntrospection(endpoint) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`Live introspection returned HTTP ${response.status}.`);
  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(`Live introspection failed: ${payload.errors.map((error) => error.message).join('; ')}`);
  }
  if (!payload.data?.__schema) throw new Error('Live introspection response did not include schema data.');
  return normalizeIntrospection(payload.data);
}

export function manifestFromIntrospection(introspection, metadata) {
  const schema = buildClientSchema(introspection);
  const manifest = {
    metadata,
    roots: {
      query: schema.getQueryType()?.name,
      mutation: schema.getMutationType()?.name,
    },
    scalars: [],
    enums: [],
    inputs: [],
    objects: [],
    unions: [],
  };

  for (const type of Object.values(schema.getTypeMap()).filter((item) => !item.name.startsWith('__'))) {
    if (isScalarType(type)) {
      const typescript = metadata.scalarMappings[type.name];
      if (!typescript) throw new Error(`Missing TypeScript mapping for live scalar: ${type.name}`);
      manifest.scalars.push({ ...typeManifest(type, 'SCALAR'), typescript });
    } else if (isEnumType(type)) manifest.enums.push(typeManifest(type, 'ENUM'));
    else if (isInputObjectType(type)) manifest.inputs.push(typeManifest(type, 'INPUT_OBJECT'));
    else if (isObjectType(type)) manifest.objects.push(typeManifest(type, 'OBJECT'));
    else if (isUnionType(type)) manifest.unions.push(typeManifest(type, 'UNION'));
  }

  for (const group of ['scalars', 'enums', 'inputs', 'objects', 'unions']) {
    manifest[group].sort(byName);
  }
  return manifest;
}

export async function readSourceMetadata() {
  return JSON.parse(await readFile(SOURCE_METADATA, 'utf8'));
}

export async function parseSchema() {
  const [metadata, introspection] = await Promise.all([
    readSourceMetadata(),
    readFile(INTROSPECTION_SNAPSHOT, 'utf8').then(JSON.parse),
  ]);
  return manifestFromIntrospection(introspection, metadata);
}

function parseType(source) {
  let cursor = 0;
  function read() {
    let node;
    if (source[cursor] === '[') {
      cursor += 1;
      node = { kind: 'list', ofType: read() };
      if (source[cursor] !== ']') throw new Error(`Invalid GraphQL type: ${source}`);
      cursor += 1;
    } else {
      const match = source.slice(cursor).match(/^[A-Za-z_][A-Za-z0-9_]*/);
      if (!match) throw new Error(`Invalid GraphQL type: ${source}`);
      cursor += match[0].length;
      node = { kind: 'named', name: match[0] };
    }
    if (source[cursor] === '!') {
      cursor += 1;
      node = { kind: 'nonNull', ofType: node };
    }
    return node;
  }
  const node = read();
  if (cursor !== source.length) throw new Error(`Invalid GraphQL type: ${source}`);
  return node;
}

function namedType(node) {
  if (node.kind === 'named') return node.name;
  return namedType(node.ofType);
}

function safeComment(value) {
  return value.replaceAll('*/', '* /').replace(/\s+/g, ' ').trim();
}

function pascalCase(value) {
  return value.replace(/(^|_)([A-Za-z0-9])/g, (_, __, character) => character.toUpperCase());
}

function generateTypes(manifest) {
  const scalarMap = Object.fromEntries(manifest.scalars.map((scalar) => [scalar.name, scalar.typescript]));
  const enumNames = new Set(manifest.enums.map((item) => item.name));
  const inputNames = new Set(manifest.inputs.map((item) => item.name));
  const objectNames = new Set(manifest.objects.map((item) => item.name));
  const unionNames = new Set(manifest.unions.map((item) => item.name));

  function reference(name) {
    if (scalarMap[name]) return scalarMap[name];
    if (enumNames.has(name) || inputNames.has(name)) return name;
    if (objectNames.has(name) || unionNames.has(name)) return `${name}Data`;
    throw new Error(`Unknown schema type: ${name}`);
  }

  function typeScriptType(node, nullable = true, input = false) {
    if (node.kind === 'nonNull') return typeScriptType(node.ofType, false, input);
    let result;
    if (node.kind === 'list') {
      result = `${input ? 'Array' : 'ReadonlyArray'}<${typeScriptType(node.ofType, true, input)}>`;
    } else {
      result = reference(node.name);
    }
    return nullable ? `${result} | null` : result;
  }

  const lines = [
    '/* eslint-disable */',
    '/**',
    ' * Generated from the pinned live AniList introspection snapshot.',
    ' * Do not edit this file directly; run `npm run schema:generate`.',
    ' */',
    '',
    'export type JsonValue = null | boolean | number | string | JsonValue[] | { readonly [key: string]: JsonValue };',
    '',
  ];

  for (const scalar of manifest.scalars) {
    if (scalar.name === 'Json') lines.push('export type Json = JsonValue;');
    else lines.push(`export type ${scalar.name} = ${scalar.typescript};`);
  }
  lines.push('');

  for (const item of manifest.enums) {
    if (item.description) lines.push(`/** ${safeComment(item.description)} */`);
    lines.push(`export type ${item.name} =`);
    item.values.forEach((value, index) => {
      if (value.deprecated) lines.push('  /** Deprecated. */');
      lines.push(`  ${index === 0 ? '' : '| '}'${value.name}'`);
    });
    lines[lines.length - 1] += ';';
    lines.push('');
  }

  for (const item of manifest.inputs) {
    if (item.description) lines.push(`/** ${safeComment(item.description)} */`);
    lines.push(`export interface ${item.name} {`);
    for (const field of item.fields) {
      if (field.description || field.deprecated) {
        lines.push(`  /** ${field.deprecated ? '@deprecated ' : ''}${safeComment(field.description)} */`);
      }
      const node = parseType(field.type);
      const required = node.kind === 'nonNull';
      lines.push(`  readonly ${field.name}${required ? '' : '?'}: ${typeScriptType(node, true, true)};`);
    }
    lines.push('}', '');
  }

  for (const item of manifest.objects) {
    if (item.description) lines.push(`/** ${safeComment(item.description)} */`);
    lines.push(`export interface ${item.name}Data {`, `  readonly __typename: '${item.name}';`);
    for (const field of item.fields) {
      if (field.description || field.deprecated) {
        lines.push(`  /** ${field.deprecated ? '@deprecated ' : ''}${safeComment(field.description)} */`);
      }
      lines.push(`  readonly ${field.name}: ${typeScriptType(parseType(field.type))};`);
    }
    lines.push('}', '');
  }

  for (const item of manifest.unions) {
    if (item.description) lines.push(`/** ${safeComment(item.description)} */`);
    lines.push(`export type ${item.name}Data = ${item.members.map((member) => `${member}Data`).join(' | ')};`, '');
  }

  for (const item of manifest.objects) {
    for (const field of item.fields) {
      if (field.args.length === 0) continue;
      const argsName = `${item.name}${pascalCase(field.name)}Args`;
      lines.push(`export interface ${argsName} {`);
      for (const argument of field.args) {
        const node = parseType(argument.type);
        const required = node.kind === 'nonNull';
        if (argument.description || argument.deprecated) {
          lines.push(`  /** ${argument.deprecated ? '@deprecated ' : ''}${safeComment(argument.description)} */`);
        }
        lines.push(`  readonly ${argument.name}${required ? '' : '?'}: ${typeScriptType(node, true, true)};`);
      }
      lines.push('}', '');
    }
  }

  for (const item of manifest.objects) {
    lines.push(`export interface ${item.name}Selection {`, '  readonly __typename?: true;');
    for (const field of item.fields) {
      const target = namedType(parseType(field.type));
      const selection = scalarMap[target] || enumNames.has(target) ? 'true' : `${target}Selection`;
      const value = field.args.length
        ? `{ readonly $args: ${item.name}${pascalCase(field.name)}Args; readonly $select: ${selection} }`
        : selection;
      lines.push(`  readonly ${field.name}?: ${value};`);
    }
    lines.push('}', '');
  }

  for (const item of manifest.unions) {
    lines.push(`export interface ${item.name}Selection {`, '  readonly __typename?: true;', '  readonly $on?: {');
    for (const member of item.members) lines.push(`    readonly ${member}?: ${member}Selection;`);
    lines.push('  };', '}', '');
  }

  lines.push(
    'export interface SchemaDataTypes {',
    ...manifest.objects.map((item) => `  readonly ${item.name}: ${item.name}Data;`),
    ...manifest.unions.map((item) => `  readonly ${item.name}: ${item.name}Data;`),
    '}',
    '',
    'type SelectionBody<T> = T extends { readonly $select: infer TSelect } ? TSelect : T;',
    'type SelectedValue<TValue, TSelection> =',
    '  TSelection extends true',
    '    ? TValue',
    '    : TValue extends null',
    '      ? null',
    '      : TValue extends ReadonlyArray<infer TItem>',
    '        ? ReadonlyArray<SelectedValue<TItem, SelectionBody<TSelection>>>',
    '        : TValue extends object',
    '          ? SelectionResult<TValue, SelectionBody<TSelection>>',
    '          : TValue;',
    '',
    'type FragmentResult<TData, TSelection> =',
    '  TData extends { readonly __typename: infer TName extends PropertyKey }',
    "    ? '$on' extends keyof TSelection",
    "      ? TSelection['$on'] extends infer TFragments",
    '        ? TName extends keyof NonNullable<TFragments>',
    '          ? SelectionResult<TData, NonNullable<TFragments>[TName]>',
    '          : unknown',
    '        : unknown',
    '      : unknown',
    '    : unknown;',
    '',
    'export type SelectionResult<TData, TSelection> = {',
    "      readonly [TKey in Exclude<keyof TSelection, '$on'> as TKey extends keyof TData ? TKey : never]:",
    '        TKey extends keyof TData ? SelectedValue<TData[TKey], TSelection[TKey]> : never;',
    '    } & FragmentResult<TData, TSelection>;',
    '',
    'export type QueryResult<TSelection extends object> = {',
    '  readonly [TKey in keyof TSelection as TKey extends keyof QueryData ? TKey : never]:',
    '    TKey extends keyof QueryData ? SelectedValue<QueryData[TKey], TSelection[TKey]> : never;',
    '};',
    '',
    'export type MutationResult<TSelection extends object> = {',
    '  readonly [TKey in keyof TSelection as TKey extends keyof MutationData ? TKey : never]:',
    '    TKey extends keyof MutationData ? SelectedValue<MutationData[TKey], TSelection[TKey]> : never;',
    '};',
    '',
  );

  return `${lines.join('\n')}\n`;
}

function generateRuntime(manifest) {
  const types = {};
  for (const item of manifest.objects) {
    types[item.name] = {
      kind: 'OBJECT',
      fields: Object.fromEntries(
        item.fields.map((field) => [
          field.name,
          {
            type: field.type,
            args: Object.fromEntries(field.args.map((argument) => [argument.name, argument.type])),
          },
        ]),
      ),
    };
  }
  for (const item of manifest.unions) types[item.name] = { kind: 'UNION', members: item.members };
  const runtime = { roots: manifest.roots, types };
  return `/* eslint-disable */\n/** Generated runtime schema metadata. */\nexport const schemaRuntime = ${JSON.stringify(runtime, null, 2)} as const;\n`;
}

export function generateArtifacts(manifest) {
  const coverage = schemaCoverage(manifest);
  return {
    'src/generated/schema.ts': generateTypes(manifest),
    'src/generated/runtime.ts': generateRuntime(manifest),
    '.github/badges/api-coverage.svg': renderBadge(
      'API coverage',
      `${coverage.percentage}%`,
      coverageColor(coverage.percentage),
    ),
  };
}

export function schemaCoverage(manifest) {
  const object = (name) => manifest.objects.find((item) => item.name === name);
  const queryFields = object(manifest.roots.query)?.fields.length ?? 0;
  const mutationFields = object(manifest.roots.mutation)?.fields.length ?? 0;
  const counts = {
    queryFields,
    mutationFields,
    objects: manifest.objects.length,
    inputs: manifest.inputs.length,
    enums: manifest.enums.length,
    unions: manifest.unions.length,
    scalars: manifest.scalars.length,
  };
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  const covered = total;
  return { ...counts, covered, total, percentage: total === 0 ? 0 : Math.round((covered / total) * 100) };
}

export function generateSchemaCoverageSection(manifest) {
  const coverage = schemaCoverage(manifest);
  return `<!-- schema-coverage:start -->

### API coverage

The generic projection API represents ${coverage.covered} of ${coverage.total} elements in the committed live schema snapshot (${coverage.percentage}%). Convenience methods focus on the workflows most applications use; every other operation remains available through \`query\` and \`mutate\`.

| AniList section      | Snapshot | Generic API | Convenience API                                                           |
| -------------------- | -------: | ----------: | ------------------------------------------------------------------------- |
| Query root fields    | ${String(coverage.queryFields).padStart(8)} |        ${coverage.percentage}% | Media, Character, User discovery                                          |
| Mutation root fields | ${String(coverage.mutationFields).padStart(8)} |        ${coverage.percentage}% | Media lists, Activities, Reviews, Recommendations, Threads, User settings |
| Object types         | ${String(coverage.objects).padStart(8)} |        ${coverage.percentage}% | Entity classes for Media, Character, User                                 |
| Input types          | ${String(coverage.inputs).padStart(8)} |        ${coverage.percentage}% | Typed mutation arguments                                                  |
| Enum types           | ${String(coverage.enums).padStart(8)} |        ${coverage.percentage}% | Typed filters and mutation arguments                                      |
| Union types          | ${String(coverage.unions).padStart(8)} |        ${coverage.percentage}% | Typed inline fragments                                                    |
| Scalar types         | ${String(coverage.scalars).padStart(8)} |        ${coverage.percentage}% | Native TypeScript mappings                                                |

<!-- schema-coverage:end -->`;
}

export function updateReadmeSchemaCoverage(readme, manifest) {
  const pattern = /<!-- schema-coverage:start -->[\s\S]*?<!-- schema-coverage:end -->/;
  if (!pattern.test(readme)) throw new Error('README is missing the generated schema coverage markers.');
  return readme.replace(pattern, generateSchemaCoverageSection(manifest));
}

export function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

export { ROOT_DIRECTORY };

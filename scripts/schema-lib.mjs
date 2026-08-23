import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT_DIRECTORY = path.resolve(import.meta.dirname, '..');
const SOURCE_DIRECTORY = path.join(ROOT_DIRECTORY, 'schema', 'vendor', 'reference');
const SOURCE_METADATA = path.join(ROOT_DIRECTORY, 'schema', 'source.json');

function decodeHtml(value) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function textContent(value) {
  return decodeHtml(
    value
      .replace(/<br\s*\/?\s*>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim(),
  );
}

function rows(markdown) {
  return [...markdown.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((row) =>
    [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((cell) => cell[1]),
  );
}

function title(markdown) {
  const match = markdown.match(/^title:\s*(.+?)\s+Reference\s*$/m);
  if (!match) throw new Error('Reference page is missing its title');
  return match[1].trim();
}

function description(markdown, typeName) {
  const escaped = typeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = markdown.match(new RegExp(`(?:### ${escaped}|# Root ${escaped})\\s*\\n([\\s\\S]*?)<table>`));
  return match ? textContent(match[1]) : '';
}

function parseFields(markdown) {
  const fields = [];
  let current;

  for (const cells of rows(markdown)) {
    if (cells.length < 2) continue;
    const strong = cells[0].match(/<strong>(?:<a[^>]*>)?([^<]+)(?:<\/a>)?<\/strong>/);
    if (strong) {
      current = {
        name: textContent(strong[1]),
        type: textContent(cells[1]),
        description: textContent(cells[2] ?? ''),
        deprecated: /deprecated/i.test(cells[2] ?? ''),
        args: [],
      };
      fields.push(current);
    } else if (current && cells.length >= 3) {
      current.args.push({
        name: textContent(cells[0]),
        type: textContent(cells[1]),
        description: textContent(cells[2]),
        deprecated: /deprecated/i.test(cells[2]),
      });
    }
  }

  return fields;
}

function parseEnum(markdown) {
  return rows(markdown)
    .map((cells) => {
      const value = cells[0]?.match(/<strong>([^<]+)<\/strong>/)?.[1];
      if (!value) return undefined;
      return {
        name: textContent(value),
        description: textContent(cells[1] ?? ''),
        deprecated: /deprecated/i.test(cells[1] ?? ''),
      };
    })
    .filter(Boolean);
}

function parseUnion(markdown) {
  return rows(markdown)
    .map((cells) => cells[0]?.match(/<a href="\/reference\/object\/[^"]+">([^<]+)<\/a>/)?.[1])
    .filter(Boolean);
}

async function referenceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
    const location = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await referenceFiles(location)));
    else if (entry.name.endsWith('.md')) files.push(location);
  }
  return files;
}

export async function parseSchema() {
  const metadata = JSON.parse(await readFile(SOURCE_METADATA, 'utf8'));
  const manifest = {
    metadata,
    roots: { query: 'Query', mutation: 'Mutation' },
    scalars: Object.entries(metadata.scalarMappings).map(([name, typescript]) => ({ name, typescript })),
    enums: [],
    inputs: [],
    objects: [],
    unions: [],
  };

  for (const file of await referenceFiles(SOURCE_DIRECTORY)) {
    const relative = path.relative(SOURCE_DIRECTORY, file);
    const markdown = await readFile(file, 'utf8');
    if (relative === 'index.md' || relative === 'sidebar.json') continue;
    if (relative === 'query.md' || relative === 'mutation.md') {
      const name = relative === 'query.md' ? 'Query' : 'Mutation';
      manifest.objects.push({ name, description: description(markdown, name), fields: parseFields(markdown) });
    } else if (relative.startsWith(`object${path.sep}`)) {
      const name = title(markdown);
      manifest.objects.push({ name, description: description(markdown, name), fields: parseFields(markdown) });
    } else if (relative.startsWith(`input${path.sep}`)) {
      const name = title(markdown);
      manifest.inputs.push({ name, description: description(markdown, name), fields: parseFields(markdown) });
    } else if (relative.startsWith(`enum${path.sep}`)) {
      const name = title(markdown);
      manifest.enums.push({ name, description: description(markdown, name), values: parseEnum(markdown) });
    } else if (relative.startsWith(`union${path.sep}`)) {
      const name = title(markdown);
      manifest.unions.push({ name, description: description(markdown, name), members: parseUnion(markdown) });
    }
  }

  for (const group of ['scalars', 'enums', 'inputs', 'objects', 'unions']) {
    manifest[group].sort((left, right) => left.name.localeCompare(right.name));
  }
  return manifest;
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
    ' * Generated from the pinned AniList documentation snapshot.',
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
  return {
    'src/generated/schema.ts': generateTypes(manifest),
    'src/generated/runtime.ts': generateRuntime(manifest),
  };
}

export function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

export { ROOT_DIRECTORY };

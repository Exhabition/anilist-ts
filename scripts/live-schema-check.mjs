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

const root = path.resolve(import.meta.dirname, '..');
const manifest = JSON.parse(await readFile(path.join(root, 'schema', 'manifest.json'), 'utf8'));
const response = await fetch('https://graphql.anilist.co', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: getIntrospectionQuery() }),
});
if (!response.ok) throw new Error(`Live introspection returned HTTP ${response.status}.`);
const payload = await response.json();
if (payload.errors?.length) throw new Error(payload.errors.map((error) => error.message).join('; '));

const live = buildClientSchema(payload.data);
const expected = new Map([
  ...manifest.scalars.map((type) => [type.name, { ...type, kind: 'SCALAR' }]),
  ...manifest.enums.map((type) => [type.name, { ...type, kind: 'ENUM' }]),
  ...manifest.inputs.map((type) => [type.name, { ...type, kind: 'INPUT_OBJECT' }]),
  ...manifest.objects.map((type) => [type.name, { ...type, kind: 'OBJECT' }]),
  ...manifest.unions.map((type) => [type.name, { ...type, kind: 'UNION' }]),
]);
const drift = [];

function compareFields(typeName, expectedFields, liveFields, input) {
  const expectedByName = new Map(expectedFields.map((field) => [field.name, field]));
  for (const field of expectedFields) {
    const actual = liveFields[field.name];
    if (!actual) {
      drift.push(`Missing live ${input ? 'input field' : 'field'}: ${typeName}.${field.name}`);
      continue;
    }
    if (String(actual.type) !== field.type) {
      drift.push(`Type drift: ${typeName}.${field.name} is ${actual.type}, expected ${field.type}`);
    }
    if (!input) {
      const expectedArgs = new Map(field.args.map((argument) => [argument.name, argument]));
      const actualArgs = new Map(actual.args.map((argument) => [argument.name, argument]));
      for (const argument of field.args) {
        const liveArgument = actualArgs.get(argument.name);
        if (!liveArgument) {
          drift.push(`Missing live argument: ${typeName}.${field.name}(${argument.name}:)`);
        } else if (String(liveArgument.type) !== argument.type) {
          drift.push(
            `Argument type drift: ${typeName}.${field.name}(${argument.name}:) is ${liveArgument.type}, expected ${argument.type}`,
          );
        }
      }
      for (const argument of actual.args) {
        if (!expectedArgs.has(argument.name)) {
          drift.push(`Live-only argument: ${typeName}.${field.name}(${argument.name}:)`);
        }
      }
    }
  }
  for (const fieldName of Object.keys(liveFields)) {
    if (!expectedByName.has(fieldName)) {
      drift.push(`Live-only ${input ? 'input field' : 'field'}: ${typeName}.${fieldName}`);
    }
  }
}

function compareType(typeName, documented, actual) {
  if (!actual) {
    drift.push(`Missing live type: ${typeName}`);
    return;
  }
  const kind = isScalarType(actual)
    ? 'SCALAR'
    : isEnumType(actual)
      ? 'ENUM'
      : isInputObjectType(actual)
        ? 'INPUT_OBJECT'
        : isObjectType(actual)
          ? 'OBJECT'
          : isUnionType(actual)
            ? 'UNION'
            : 'UNKNOWN';
  if (kind !== documented.kind) {
    drift.push(`Kind drift: ${typeName} is ${kind}, expected ${documented.kind}`);
    return;
  }
  if (kind === 'OBJECT') compareFields(typeName, documented.fields, actual.getFields(), false);
  if (kind === 'INPUT_OBJECT') compareFields(typeName, documented.fields, actual.getFields(), true);
  if (kind === 'ENUM') {
    const expectedValues = new Set(documented.values.map((value) => value.name));
    const liveValues = new Set(actual.getValues().map((value) => value.name));
    for (const value of expectedValues)
      if (!liveValues.has(value)) drift.push(`Missing live enum value: ${typeName}.${value}`);
    for (const value of liveValues)
      if (!expectedValues.has(value)) drift.push(`Live-only enum value: ${typeName}.${value}`);
  }
  if (kind === 'UNION') {
    const expectedMembers = new Set(documented.members);
    const liveMembers = new Set(actual.getTypes().map((member) => member.name));
    for (const member of expectedMembers)
      if (!liveMembers.has(member)) drift.push(`Missing live union member: ${typeName}.${member}`);
    for (const member of liveMembers)
      if (!expectedMembers.has(member)) drift.push(`Live-only union member: ${typeName}.${member}`);
  }
}

for (const [typeName, documented] of expected) compareType(typeName, documented, live.getType(typeName));
for (const [typeName, actual] of Object.entries(live.getTypeMap())) {
  if (typeName.startsWith('__') || expected.has(typeName)) continue;
  if (
    isScalarType(actual) ||
    isEnumType(actual) ||
    isInputObjectType(actual) ||
    isObjectType(actual) ||
    isUnionType(actual)
  ) {
    drift.push(`Live-only type: ${typeName}`);
  }
}

if (drift.length) throw new Error(`AniList schema drift detected:\n${drift.join('\n')}`);
console.log('The live AniList schema matches the committed docs-derived manifest.');

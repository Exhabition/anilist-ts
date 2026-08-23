import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { buildClientSchema, getIntrospectionQuery } from 'graphql';

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
const documented = new Map(
  manifest.objects.map((type) => [type.name, new Set(type.fields.map((field) => field.name))]),
);
const drift = [];
for (const [name, type] of Object.entries(live.getTypeMap())) {
  if (name.startsWith('__') || typeof type.getFields !== 'function') continue;
  const expected = documented.get(name);
  if (!expected) {
    drift.push(`Live-only type: ${name}`);
    continue;
  }
  for (const field of Object.keys(type.getFields()))
    if (!expected.has(field)) drift.push(`Live-only field: ${name}.${field}`);
}
if (drift.length) throw new Error(`AniList schema drift detected:\n${drift.join('\n')}`);
console.log('The live AniList schema has no undocumented object fields.');

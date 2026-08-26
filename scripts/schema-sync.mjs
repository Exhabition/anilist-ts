import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import {
  fetchLiveIntrospection,
  manifestFromIntrospection,
  readSourceMetadata,
  ROOT_DIRECTORY,
  stableJson,
} from './schema-lib.mjs';

const source = await readSourceMetadata();
const introspection = await fetchLiveIntrospection(source.endpoint);
const metadata = { ...source, fetchedAt: new Date().toISOString() };
const manifest = manifestFromIntrospection(introspection, metadata);
await writeFile(path.join(ROOT_DIRECTORY, 'schema', 'source.json'), stableJson(metadata));
await writeFile(path.join(ROOT_DIRECTORY, 'schema', 'introspection.json'), stableJson(introspection));
await writeFile(path.join(ROOT_DIRECTORY, 'schema', 'manifest.json'), stableJson(manifest));
console.log(`Captured ${manifest.objects.length} objects from ${metadata.endpoint}.`);

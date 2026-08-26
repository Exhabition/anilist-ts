import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  fetchLiveIntrospection,
  manifestFromIntrospection,
  readSourceMetadata,
  ROOT_DIRECTORY,
  stableJson,
} from './schema-lib.mjs';

const metadata = await readSourceMetadata();
const expected = JSON.parse(await readFile(path.join(ROOT_DIRECTORY, 'schema', 'manifest.json'), 'utf8'));
const introspection = await fetchLiveIntrospection(metadata.endpoint);
const live = manifestFromIntrospection(introspection, expected.metadata);

if (stableJson(live) !== stableJson(expected)) {
  throw new Error(
    'AniList schema drift detected. Run npm run schema:sync && npm run schema:generate, then review the generated changes.',
  );
}

console.log('The live AniList schema matches the committed introspection snapshot.');

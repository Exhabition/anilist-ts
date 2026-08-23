import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parseSchema, ROOT_DIRECTORY, stableJson } from './schema-lib.mjs';

const manifest = await parseSchema();
await writeFile(path.join(ROOT_DIRECTORY, 'schema', 'manifest.json'), stableJson(manifest));
console.log(`Parsed ${manifest.objects.length} objects from AniList docs commit ${manifest.metadata.commit}.`);

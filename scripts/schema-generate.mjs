import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { generateArtifacts, ROOT_DIRECTORY } from './schema-lib.mjs';

const manifest = JSON.parse(await readFile(path.join(ROOT_DIRECTORY, 'schema', 'manifest.json'), 'utf8'));
for (const [relative, content] of Object.entries(generateArtifacts(manifest))) {
  await writeFile(path.join(ROOT_DIRECTORY, relative), content);
}
console.log('Generated AniList schema types and runtime maps.');

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { generateArtifacts, ROOT_DIRECTORY, updateReadmeSchemaCoverage } from './schema-lib.mjs';

const manifest = JSON.parse(await readFile(path.join(ROOT_DIRECTORY, 'schema', 'manifest.json'), 'utf8'));
for (const [relative, content] of Object.entries(generateArtifacts(manifest))) {
  await mkdir(path.dirname(path.join(ROOT_DIRECTORY, relative)), { recursive: true });
  await writeFile(path.join(ROOT_DIRECTORY, relative), content);
}
const readmePath = path.join(ROOT_DIRECTORY, 'README.md');
const readme = await readFile(readmePath, 'utf8');
await writeFile(readmePath, updateReadmeSchemaCoverage(readme, manifest));
console.log('Generated AniList schema types, runtime maps, coverage, and API badge.');

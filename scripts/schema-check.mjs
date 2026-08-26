import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  generateArtifacts,
  parseSchema,
  ROOT_DIRECTORY,
  stableJson,
  updateReadmeSchemaCoverage,
} from './schema-lib.mjs';

const expectedManifest = await parseSchema();
const readme = await readFile(path.join(ROOT_DIRECTORY, 'README.md'), 'utf8');
const checks = {
  'schema/manifest.json': stableJson(expectedManifest),
  ...generateArtifacts(expectedManifest),
  'README.md': updateReadmeSchemaCoverage(readme, expectedManifest),
};
const drift = [];
for (const [relative, expected] of Object.entries(checks)) {
  const actual = await readFile(path.join(ROOT_DIRECTORY, relative), 'utf8').catch(() => '');
  if (actual !== expected) drift.push(relative);
}
if (drift.length > 0) {
  throw new Error(
    `Generated schema drift detected: ${drift.join(', ')}. Run npm run schema:sync && npm run schema:generate.`,
  );
}
console.log('Generated schema is current.');

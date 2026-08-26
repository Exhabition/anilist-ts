import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { coverageColor, renderBadge } from './badge-lib.mjs';
import { ROOT_DIRECTORY } from './schema-lib.mjs';

const summaryPath = path.join(ROOT_DIRECTORY, 'coverage', 'coverage-summary.json');
const badgePath = path.join(ROOT_DIRECTORY, '.github', 'badges', 'test-coverage.svg');
const summary = JSON.parse(await readFile(summaryPath, 'utf8'));
const percentage = summary.total?.lines?.pct;
if (typeof percentage !== 'number') throw new Error('Coverage summary does not contain total line coverage.');

const expected = renderBadge('test coverage', `${percentage}%`, coverageColor(percentage));
if (process.argv.includes('--write')) {
  await writeFile(badgePath, expected);
  console.log(`Updated test coverage badge to ${percentage}%.`);
} else {
  const actual = await readFile(badgePath, 'utf8').catch(() => '');
  if (actual !== expected) {
    throw new Error(`Test coverage badge is stale (${percentage}%). Run npm run coverage:badge.`);
  }
  console.log(`Test coverage badge is current at ${percentage}%.`);
}

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const readme = await readFile(path.join(root, 'README.md'), 'utf8');
const output = path.join(root, '.readme-examples');
await mkdir(output, { recursive: true });
const examples = [...readme.matchAll(/```ts compile\n([\s\S]*?)```/g)];
if (examples.length === 0) throw new Error('README contains no compiled TypeScript examples.');
await Promise.all(
  examples.map((example, index) => writeFile(path.join(output, `example-${index + 1}.ts`), example[1])),
);
console.log(`Extracted ${examples.length} README examples for TypeScript compilation.`);

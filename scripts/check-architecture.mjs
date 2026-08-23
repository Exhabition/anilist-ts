import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const source = path.resolve(import.meta.dirname, '..', 'src');

async function files(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const location = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...(await files(location)));
    else if (entry.name.endsWith('.ts')) output.push(location);
  }
  return output;
}

const allSourceFiles = await files(source);
const sourceFiles = allSourceFiles.filter((file) => !file.includes(`${path.sep}generated${path.sep}`));
const graph = new Map();
const unresolved = [];
for (const file of sourceFiles) {
  const imports = [];
  const contents = await readFile(file, 'utf8');
  for (const match of contents.matchAll(/(?:from\s+|import\s*)['"](\.[^'"]+)['"]/g)) {
    const candidate = path.resolve(path.dirname(file), match[1].replace(/\.js$/, '.ts'));
    if (!allSourceFiles.includes(candidate)) unresolved.push(`${path.relative(source, file)} -> ${match[1]}`);
    else if (sourceFiles.includes(candidate)) imports.push(candidate);
  }
  graph.set(file, imports);
}

const visiting = new Set();
const visited = new Set();
const cycles = [];
function visit(file, stack = []) {
  if (visiting.has(file)) {
    cycles.push([...stack.slice(stack.indexOf(file)), file].map((item) => path.relative(source, item)).join(' -> '));
    return;
  }
  if (visited.has(file)) return;
  visiting.add(file);
  for (const dependency of graph.get(file) ?? []) visit(dependency, [...stack, file]);
  visiting.delete(file);
  visited.add(file);
}
for (const file of sourceFiles) visit(file);

if (unresolved.length || cycles.length) {
  throw new Error(
    [...unresolved.map((item) => `Unresolved: ${item}`), ...cycles.map((item) => `Cycle: ${item}`)].join('\n'),
  );
}
console.log(
  `Architecture check passed for ${sourceFiles.length} handwritten source files (no cycles or unresolved imports).`,
);

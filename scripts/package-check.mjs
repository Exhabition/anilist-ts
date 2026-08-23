import { existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
for (const file of [
  'dist/index.js',
  'dist/index.cjs',
  'dist/index.d.ts',
  'dist/redis.js',
  'dist/redis.cjs',
  'dist/redis.d.ts',
]) {
  if (!existsSync(path.join(root, file))) throw new Error(`Missing package artifact: ${file}`);
}
console.log('Required ESM, CommonJS, declaration, and Redis subpath artifacts are present.');

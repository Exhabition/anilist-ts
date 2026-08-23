import { createRequire } from 'node:module';
import path from 'node:path';
import { build } from 'esbuild';

const root = path.resolve(import.meta.dirname, '..');
const esm = await import(path.join(root, 'dist', 'index.js'));
const commonjs = createRequire(import.meta.url)(path.join(root, 'dist', 'index.cjs'));
if (typeof esm.AniListClient !== 'function' || typeof commonjs.AniListClient !== 'function') {
  throw new Error('Built ESM or CommonJS entry point is invalid.');
}
await build({
  stdin: {
    contents: "import { AniListClient } from './dist/index.js'; globalThis.client = new AniListClient({ fetch });",
    resolveDir: root,
    sourcefile: 'browser-smoke.ts',
  },
  bundle: true,
  platform: 'browser',
  format: 'esm',
  write: false,
  logLevel: 'silent',
});
console.log('ESM, CommonJS, and browser bundle smoke tests passed.');

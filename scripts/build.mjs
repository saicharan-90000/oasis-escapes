import { cp, mkdir, readdir, stat } from 'node:fs/promises';
import { relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('../', import.meta.url)));
const sourceRoot = resolve(projectRoot, 'outputs');
const buildRoot = resolve(projectRoot, 'dist');

if (relative(projectRoot, buildRoot) !== 'dist') {
  throw new Error('Refusing to build outside the project dist directory.');
}

const sourceInfo = await stat(sourceRoot);
if (!sourceInfo.isDirectory()) {
  throw new Error(`Static website source folder not found: ${sourceRoot}`);
}

await mkdir(buildRoot, { recursive: true });
await cp(sourceRoot, buildRoot, { recursive: true, force: true });

const builtIndex = await stat(resolve(buildRoot, 'index.html'));
if (!builtIndex.isFile()) {
  throw new Error('Build did not produce dist/index.html.');
}

const entries = await readdir(buildRoot, { withFileTypes: true });
console.log(`Production build ready in dist/ (${entries.length} top-level entries copied from outputs/).`);

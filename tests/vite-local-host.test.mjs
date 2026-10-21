import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');

function loadViteConfig(githubPages) {
  const source = fs.readFileSync(new URL('../vite.config.ts', import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, {
    fileName: 'vite.config.ts',
    reportDiagnostics: true,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  });
  assert.deepEqual(compiled.diagnostics ?? [], [], 'Vite configuration must transpile');
  const module = { exports: {} };
  vm.runInNewContext(compiled.outputText, {
    module,
    exports: module.exports,
    __dirname: process.cwd(),
    process: { env: { GITHUB_PAGES: githubPages ? 'true' : undefined } },
    require(name) {
      if (name === 'vite') return { defineConfig: (value) => value };
      if (name === '@vitejs/plugin-react-swc') return { __esModule: true, default: () => ({}) };
      if (name === 'path') return require('node:path');
      throw new Error('Unexpected Vite config import: ' + name);
    },
  }, { filename: 'vite.config.ts' });
  return module.exports.default();
}

test('default dev server listens on loopback, not a wildcard interface', () => {
  const config = loadViteConfig(false);
  assert.equal(config.server.host, '127.0.0.1');
});

test('default development port remains 8080', () => {
  assert.equal(loadViteConfig(false).server.port, 8080);
});

test('GitHub Pages build base remains unchanged', () => {
  assert.equal(loadViteConfig(false).base, '/');
  assert.equal(loadViteConfig(true).base, '/biozone-harmony-boost/');
});

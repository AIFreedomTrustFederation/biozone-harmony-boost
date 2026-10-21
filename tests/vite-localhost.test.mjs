import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

function loadViteConfig(env = {}) {
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
  assert.deepEqual(compiled.diagnostics ?? [], [], 'Vite config must transpile');
  const module = { exports: {} };
  vm.runInNewContext(compiled.outputText, {
    module,
    exports: module.exports,
    process: { env },
    __dirname: '/test/repo',
    require(name) {
      if (name === 'vite') return { defineConfig: value => value };
      if (name === '@vitejs/plugin-react-swc') return { __esModule: true, default: () => ({ name: 'react' }) };
      if (name === 'path') return path;
      throw new Error(`Unexpected dependency: ${name}`);
    },
  }, { filename: 'vite.config.ts' });
  return module.exports.default();
}

test('development server binds only to loopback by default', () => {
  const config = loadViteConfig();
  assert.equal(config.server.host, '127.0.0.1');
  assert.equal(config.server.port, 8080);
  assert.equal(config.base, '/');
});

test('GitHub Pages build preserves project base and loopback development setting', () => {
  const config = loadViteConfig({ GITHUB_PAGES: 'true' });
  assert.equal(config.base, '/biozone-harmony-boost/');
  assert.equal(config.server.host, '127.0.0.1');
});

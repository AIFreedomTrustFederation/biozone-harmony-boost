import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const packageJson = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));

function runFixture(appSource, nodeSource) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'biozone-typecheck-'));
  try {
    for (const name of ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json']) {
      fs.copyFileSync(path.join(repoRoot, name), path.join(dir, name));
    }
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({
      private: true,
      scripts: { typecheck: packageJson.scripts.typecheck },
    }));
    fs.mkdirSync(path.join(dir, 'src'));
    fs.writeFileSync(path.join(dir, 'src', 'type-probe.ts'), appSource);
    fs.writeFileSync(path.join(dir, 'vite.config.ts'), nodeSource);
    return spawnSync('npm', ['run', 'typecheck'], {
      cwd: dir,
      encoding: 'utf8',
      timeout: 30000,
      env: {
        ...process.env,
        PATH: [path.join(repoRoot, 'node_modules', '.bin'), process.env.PATH].join(path.delimiter),
      },
    });
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const validApp = 'export const count: number = 1;\n';
const validNode = 'export const enabled: boolean = true;\n';

test('typecheck detects a TypeScript error in application source', () => {
  const result = runFixture('export const count: number = "invalid";\n', validNode);
  assert.notEqual(result.status, 0, 'application type errors must fail the typecheck command');
  assert.match(result.stdout + result.stderr, /TS2322/);
});

test('typecheck detects a TypeScript error in Vite configuration', () => {
  const result = runFixture(validApp, 'export const enabled: boolean = "invalid";\n');
  assert.notEqual(result.status, 0, 'Vite config type errors must fail the typecheck command');
  assert.match(result.stdout + result.stderr, /TS2322/);
});

test('typecheck succeeds for valid application and Vite source', () => {
  const result = runFixture(validApp, validNode);
  assert.equal(result.status, 0, result.stdout + result.stderr);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');

function loadApiClient() {
  const source = fs.readFileSync(new URL('../src/services/api/apiClient.ts', import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, {
    fileName: 'apiClient.ts',
    reportDiagnostics: true,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  });
  assert.deepEqual(compiled.diagnostics ?? [], [], 'TypeScript must transpile without errors');

  const interceptors = [];
  const logs = [];
  let axiosConfig;
  const fakeAxios = {
    create(config) {
      axiosConfig = config;
      return {
        defaults: { headers: { common: {} } },
        interceptors: { response: { use(success, failure) { interceptors.push({ success, failure }); } } },
      };
    },
  };
  const module = { exports: {} };
  vm.runInNewContext(compiled.outputText, {
    module,
    exports: module.exports,
    require(name) {
      assert.equal(name, 'axios');
      return { __esModule: true, default: fakeAxios };
    },
    console: { error(...args) { logs.push(args); } },
    Promise,
  }, { filename: 'apiClient.ts' });
  return { ApiClient: module.exports.default, interceptors, logs, getConfig: () => axiosConfig };
}

test('rejected requests propagate unchanged without logging bearer credentials', async () => {
  const { ApiClient, interceptors, logs } = loadApiClient();
  const client = new ApiClient('https://example.invalid');
  client.setAuthToken('SYNTHETIC_SECRET_DO_NOT_LOG');
  assert.equal(interceptors.length, 1);
  const error = new Error('Synthetic network failure');
  error.config = { headers: { Authorization: 'Bearer SYNTHETIC_SECRET_DO_NOT_LOG' } };
  await assert.rejects(interceptors[0].failure(error), e => e === error);
  assert.deepEqual(logs, [], 'No Axios error/config objects should be logged');
});

test('successful responses and auth token methods remain backward-compatible', () => {
  const { ApiClient, interceptors, getConfig } = loadApiClient();
  const client = new ApiClient('https://example.invalid');
  assert.equal(getConfig().baseURL, 'https://example.invalid');
  assert.equal(getConfig().timeout, 30000);
  client.setAuthToken('SYNTHETIC_TOKEN');
  assert.equal(client.client.defaults.headers.common.Authorization, 'Bearer SYNTHETIC_TOKEN');
  client.clearAuthToken();
  assert.equal(client.client.defaults.headers.common.Authorization, undefined);
  const response = { status: 200, data: { ok: true } };
  assert.equal(interceptors[0].success(response), response);
});

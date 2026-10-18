import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const source = readFileSync(new URL('../src/components/WalletSection.tsx', import.meta.url), 'utf8');

test('clearly identifies fictional wallet and activity', () => {
  assert.match(source, /Aether Wallet \(Concept Only\)/);
  assert.match(source, /all listed activity is fictional/);
  assert.match(source, /Fictional Activity Examples/);
});
test('never displays fictitious balance, fiat valuation or yield as live', () => {
  assert.match(source, /Account balance<\/p>[\s\S]*?Not connected<\/h3>/);
  assert.match(source, /No verified yield or staking service/);
  assert.doesNotMatch(source, /45\.28 Biozoe|\$3\.29 USD|8\.2%|10\.5%|12\.5 Biozoe/);
});
test('unavailable wallet, history and staking actions are disabled', () => {
  assert.equal((source.match(/<Button variant="outline" disabled className="flex-col h-20/g) || []).length, 4);
  assert.equal((source.match(/<Button size="sm" disabled/g) || []).length, 2);
  assert.match(source, /variant="ghost" disabled/);
  assert.match(source, /variant="outline" disabled>/);
});
test('wallet concept navigation remains available', () => {
  assert.match(source, /<Link to="\/wallet">[\s\S]*?Explore Wallet Concept/);
});

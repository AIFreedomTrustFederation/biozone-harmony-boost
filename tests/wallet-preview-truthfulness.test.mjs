import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync(new URL('../src/components/WalletSection.tsx', import.meta.url), 'utf8');

test('wallet preview does not present example amounts as live funds or market returns', () => {
  assert.match(source, /Illustrative Balance \(not live\)/);
  assert.match(source, /45\.28 Biozoe \(example\)/);
  assert.match(source, /No verified fiat price or exchange rate/);
  assert.match(source, /No staking service or yield is offered/);
  assert.match(source, /Commitment Models \(illustrative\)/);
  assert.doesNotMatch(source, /Current Balance|Current APY|8\.2% APY|10\.5% APY|≈ \$3\.29 USD/);
});

test('unimplemented financial and pagination controls are disabled', () => {
  for (const icon of ['Send', 'Download', 'Plus', 'BarChart3']) {
    assert.match(source, new RegExp('<Button[^>]*\\bdisabled\\b[^>]*>\\s*<' + icon + '\\b'));
  }
  assert.equal((source.match(/<Button[^>]*\bdisabled\b[^>]*>\s*Not available/g) ?? []).length, 2);
  assert.match(source, /<Button[^>]*\bdisabled\b[^>]*>\s*View all transactions/);
  assert.match(source, /<Button[^>]*\bdisabled\b[^>]*>\s*Load More/);
});

test('activity records and wallet destination are labeled as examples', () => {
  assert.match(source, /Sample Activity \(fictional\)/);
  assert.match(source, /Fictional Activity History/);
  assert.match(source, /Example record A/);
  assert.match(source, /Explore Wallet Concept/);
  assert.doesNotMatch(source, /2 hours ago|1 day ago|3 days ago|Access Full Wallet/);
});

import { sum } from '../utils.js';
import { test } from 'node:test';
import { ok, strictEqual } from 'node:assert';

test('sum function is exported', () => {
  ok(typeof sum === 'function', 'sum should be exported as a function');
});

test('sum returns correct result for positive integers', () => {
  strictEqual(sum(2, 3), 5, 'sum(2, 3) should equal 5');
});
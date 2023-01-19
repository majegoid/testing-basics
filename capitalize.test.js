import { capitalize } from './capitalize.js';

test('capitalize works', () => {
  expect(capitalize('abc')).toBe('Abc');
  expect(capitalize('my string')).toBe('My String');
});

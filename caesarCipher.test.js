import { caesarCipher } from './caesarCipher.js';

test('caesar cipher works with valid inputs', () => {
  expect(caesarCipher('z z', 7)).toBe('g g');
});

test('caesar cipher increments lowercase chars', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('bcd', -1)).toBe('abc');
});

test('caesar cipher increments uppercase chars', () => {
  expect(caesarCipher('ABC', 1)).toBe('BCD');
  expect(caesarCipher('BCD', -1)).toBe('ABC');
});

test('caesar cipher wraps back to start of alphabet', () => {
  expect(caesarCipher('ZA', 1)).toBe('AB');
  expect(caesarCipher('AB', -1)).toBe('ZA');
});

test('caesar cipher increments chars of different casings, ignoring non-alpha', () => {
  expect(caesarCipher('a; B2', 1)).toBe('b; C2');
  expect(caesarCipher('b; C2', -1)).toBe('a; B2');
});

test('caesar cipher returns undefined when given an invalid input', () => {
  expect(caesarCipher('a', 1)).not.toBe(undefined);
  expect(caesarCipher(null, 1)).toBe(undefined);
  expect(caesarCipher('asdf', null)).toBe(undefined);
  expect(caesarCipher(null, null)).toBe(undefined);
});

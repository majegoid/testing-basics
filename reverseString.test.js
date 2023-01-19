import { reverseString } from './reverseString';

test('reverseString works', () => {
  expect(reverseString('abc')).toBe('cba');
  expect(reverseString('abba')).toBe('abba');
});

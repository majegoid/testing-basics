import { calculator } from './calculator';

const { add, subtract, multiply, divide } = calculator;

test('calculator methods work with valid inputs', () => {
  expect(add(1, 2)).toBe(3);
  expect(subtract(2, 1)).toBe(1);
  expect(multiply(2, 3)).toBe(6);
  expect(divide(4, 2)).toBe(2);
});

test('calculator methods work with invalid inputs', () => {
  const funcArr = [add, subtract, multiply, divide];
  const validArg = 7;
  const invalidArgs = ['7', null, undefined];
  for (const func of funcArr) {
    for (const invalidArg of invalidArgs) {
      expect(func(validArg, validArg)).not.toBe(undefined);
      expect(func(invalidArg, validArg)).toBe(undefined);
      expect(func(validArg, invalidArg)).toBe(undefined);
      expect(func(invalidArg, invalidArg)).toBe(undefined);
    }
  }
});

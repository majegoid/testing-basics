import { analyzeArray } from './analyzeArray.js';

// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

const testArr = [1, 8, 3, 4, 2, 6];

test('correctly produces an average', () => {
  expect(analyzeArray(testArr).average).toBe(4);
});

test('correctly produces a min', () => {
  expect(analyzeArray(testArr).min).toBe(1);
});

test('correctly produces a max', () => {
  expect(analyzeArray(testArr).max).toBe(8);
});

test('correctly produces a length', () => {
  expect(analyzeArray(testArr).length).toBe(6);
});

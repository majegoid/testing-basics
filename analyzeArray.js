export function analyzeArray(arr) {
  for (const item of arr) {
    if (typeof item !== 'number' || Number.isNaN(item)) {
      return undefined;
    }
  }

  const average = arr.reduce((curSum, nextNum) => curSum + nextNum, 0) / arr.length;
  const min = arr.reduce((curMin, nextNum) => (curMin > nextNum ? nextNum : curMin), Infinity);
  const max = arr.reduce((curMax, nextNum) => (curMax < nextNum ? nextNum : curMax), -Infinity);
  const length = arr.length;

  return { average, min, max, length };
}

import { reduce } from './array-reduce-transformation';

describe('Task #7 | Array Reduce Transformation | Example testcases', () => {
  test('#1 Sum', () => {
    const nums = [1, 2, 3, 4];
    const init = 0;
    const fn = (accum: number, curr: number): number => accum + curr;
    const expected = 10;
    const output = reduce(nums, fn, init);
    expect(output).toBe(expected);
  });

  test('#2 Square Sum', () => {
    const nums = [1, 2, 3, 4];
    const init = 100;
    const fn = (accum: number, curr: number): number => accum + curr * curr;
    const expected = 130;
    const output = reduce(nums, fn, init);
    expect(output).toBe(expected);
  });

  test('#3 Empty Array', () => {
    const nums: number[] = [];
    const init = 25;
    const fn = (_: number, __: number): number => 0;
    const expected = 25;
    const output = reduce(nums, fn, init);
    expect(output).toBe(expected);
  });
});

import { search } from './solution';

describe('Binary Search | NeetCode | RoadMap | Testcases', () => {
  test('#1 Target is in array', () => {
    const nums = [-1, 0, 2, 4, 6, 8];
    const target = 4;
    const expected = 3;
    const output = search(nums, target);
    expect(output).toBe(expected);
  });

  test('#2 Target is not in array', () => {
    const nums = [-1, 0, 2, 4, 6, 8];
    const target = 3;
    const expected = -1;
    const output = search(nums, target);
    expect(output).toBe(expected);
  });
});

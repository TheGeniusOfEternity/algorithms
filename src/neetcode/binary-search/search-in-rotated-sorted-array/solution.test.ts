import { search } from './solution';

describe('Search In Rotated Sorted Array | NeetCode | RoadMap | Testcases', () => {
  test('#1 Target is in array', () => {
    const nums = [3, 4, 5, 6, 1, 2];
    const target = 1;
    const output = search(nums, target);
    expect(output).toBe(4);
  });

  test('#2 Target is not in array', () => {
    const nums = [3, 5, 6, 0, 1, 2];
    const target = 4;
    const output = search(nums, target);
    expect(output).toBe(-1);
  });
});

import { findMin } from './solution';

describe('Find Minimum In Rotated Sorted Array | NeetCode | RoadMap | Testcases', () => {
  test('#1 ', () => {
    const nums = [3, 4, 5, 6, 1, 2];
    const output = findMin(nums);
    expect(output).toBe(1);
  });

  test('#2 ', () => {
    const nums = [4, 5, 0, 1, 2, 3];
    const output = findMin(nums);
    expect(output).toBe(0);
  });
});

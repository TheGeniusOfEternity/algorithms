import { maxSlidingWindow } from './solution';

describe('Sliding Window Maximum | NeetCode | RoadMap | Testcases', () => {
  test('#1 Example', () => {
    const nums = [1, 2, 1, 0, 4, 2, 6];
    const k = 3;
    const expected = [2, 2, 4, 4, 6];
    const output = maxSlidingWindow(nums, k);
    expect(output).toEqual(expected);
  });
});

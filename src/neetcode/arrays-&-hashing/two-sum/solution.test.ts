import { twoSum } from './solution';

describe('Two Sum | NeetCode RoadMap | Testcases', () => {
  test('#1 Neighbour indices', () => {
    const nums = [3, 4, 5, 6];
    const target = 7;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  test('#2 Somewhere indices', () => {
    const nums = [4, 5, 6];
    const target = 10;
    expect(twoSum(nums, target)).toEqual([0, 2]);
  });

  test('#3 Neighbour indices, repeated value', () => {
    const nums = [5, 5];
    const target = 10;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
});

import { topKFrequent } from './solution';

describe('Top K Frequent Elements | NeetCode RoadMap | Testcases', () => {
  test('#1', () => {
    const nums = [1, 2, 2, 3, 3, 3];
    const k = 2;
    expect(topKFrequent(nums, k)).toEqual([3, 2]);
  });

  test('#2', () => {
    const nums = [7, 7];
    const k = 1;
    expect(topKFrequent(nums, k)).toEqual([7]);
  });
});

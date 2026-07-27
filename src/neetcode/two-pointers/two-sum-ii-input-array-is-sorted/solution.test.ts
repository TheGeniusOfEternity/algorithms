import { twoSum } from './solution';

describe('Two Sum II Input Array Is Sorted | NeetCode RoadMap | Testcases', () => {
  test('#1 Positive nums', () => {
    const numbers = [1, 2, 3, 4];
    const target = 3;
    const output = twoSum(numbers, target);
    const expected = [1, 2];
    expect(output).toEqual(expected);
  });
});

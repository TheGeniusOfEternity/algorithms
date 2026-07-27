import { threeSum } from './solution';

describe('3Sum | NeetCode | RoadMap | Testcases', () => {
  test('#1 Some triplets', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    const output = threeSum(nums);
    expect(output).toEqual(expected);
  });

  test('#2 No triplets', () => {
    const nums = [0, 1, 1];
    const expected: number[][] = [];
    const output = threeSum(nums);
    expect(output).toEqual(expected);
  });

  test('#3 One triplet', () => {
    const nums = [0, 0, 0];
    const expected: number[][] = [[0, 0, 0]];
    const output = threeSum(nums);
    expect(output).toEqual(expected);
  });
});

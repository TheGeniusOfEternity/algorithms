import { longestConsecutive } from './solution';

describe('Longest Consecutive Sequence | NeetCode RoadMap | Testcases', () => {
  test('#1 Subsequence from start to end', () => {
    const nums = [2, 20, 4, 10, 3, 4, 5];
    const expected = 4;
    const output = longestConsecutive(nums);
    expect(output).toBe(expected);
  });

  test('#2 Subsequence unsorted', () => {
    const nums = [0, 3, 2, 5, 4, 6, 1, 1];
    const expected = 7;
    const output = longestConsecutive(nums);
    expect(output).toBe(expected);
  });

  test('#3 One element', () => {
    const nums = [2];
    const expected = 1;
    const output = longestConsecutive(nums);
    expect(output).toBe(expected);
  });

  test('#4 Empty array', () => {
    const nums: number[] = [];
    const expected = 0;
    const output = longestConsecutive(nums);
    expect(output).toBe(expected);
  });

  test('#5 Negative nums', () => {
    const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
    const expected = 7;
    const output = longestConsecutive(nums);
    expect(output).toBe(expected);
  });
});

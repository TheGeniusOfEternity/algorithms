import { lengthOfLongestSubstring } from './solution';

describe('Longest Substring Without Repeating Characters | NeetCode | RoadMap | Testcases', () => {
  test('#1 Substrings with the same length', () => {
    const s = 'zxyzxyz';
    const output = lengthOfLongestSubstring(s);
    expect(output).toBe(3);
  });

  test('#2 One character string', () => {
    const s = 'xxxx';
    const output = lengthOfLongestSubstring(s);
    expect(output).toBe(1);
  });

  test('#3 Substrings with different lengths', () => {
    const s = 'dvdf';
    const output = lengthOfLongestSubstring(s);
    expect(output).toBe(3);
  });
});

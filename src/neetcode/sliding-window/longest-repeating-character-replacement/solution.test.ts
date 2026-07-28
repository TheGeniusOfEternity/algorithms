import { characterReplacement } from './solution';

describe('Longest Repeating Character Replacement | NeetCode | RoadMap | Testcases', () => {
  test('#1 Two replacements', () => {
    const s = 'XYYX';
    const k = 2;
    const output = characterReplacement(s, k);
    expect(output).toBe(4);
  });

  test('#2 One replacement', () => {
    const s = 'AAABABB';
    const k = 1;
    const output = characterReplacement(s, k);
    expect(output).toBe(5);
  });

  test('#3 Zero replacements', () => {
    const s = 'AAAB';
    const k = 0;
    const output = characterReplacement(s, k);
    expect(output).toBe(3);
  });
});

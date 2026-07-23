import { isAnagram } from './solution';

describe('Valid Anagram | NeetCode RoadMap | Testcases', () => {
  test('#1 Valid', () => {
    const s = 'racecar';
    const t = 'carrace';
    expect(isAnagram(s, t)).toBe(true);
  });

  test('#2 Invalid', () => {
    const s = 'jar';
    const t = 'jam';
    expect(isAnagram(s, t)).toBe(false);
  });
});

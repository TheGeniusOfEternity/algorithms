import { groupAnagrams } from './solution';

describe('Group Anagrams | NeetCode RoadMap | Testcases', () => {
  test('#1 Multiple Anagrams', () => {
    const strs = ['act', 'pots', 'tops', 'cat', 'stop', 'hat'];
    const expected = [['hat'], ['act', 'cat'], ['pots', 'tops', 'stop']];
    const output = groupAnagrams(strs);
    expect(output).toEqual(expected);
  });

  test('#2 Single Anagram', () => {
    const strs = ['x'];
    const expected = [['x']];
    const output = groupAnagrams(strs);
    expect(output).toEqual(expected);
  });

  test('#3 Empty Strings', () => {
    const strs = [''];
    const expected = [['']];
    const output = groupAnagrams(strs);
    expect(output).toEqual(expected);
  });
});

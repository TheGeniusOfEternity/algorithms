import { checkInclusion } from './solution';

describe('Permutation In String | NeetCode | RoadMap | Testcases', () => {
  test('#1 Permutation exists', () => {
    const s1 = 'abc';
    const s2 = 'lecabee';
    expect(checkInclusion(s1, s2)).toBe(true);
  });

  test('#2 Permutation does not exist', () => {
    const s1 = 'abc';
    const s2 = 'lecaabee';
    expect(checkInclusion(s1, s2)).toBe(false);
  });

  test('#3 Window will not be initialized', () => {
    const s1 = 'ab';
    const s2 = 'eidboaoo';
    expect(checkInclusion(s1, s2)).toBe(false);
  });

  test('#4 Repeated needed chars', () => {
    const s1 = 'adc';
    const s2 = 'dcda';
    expect(checkInclusion(s1, s2)).toBe(true);
  });

  test('#5 Repeated needed chars', () => {
    const s1 = 'hello';
    const s2 = 'ooolleoooleh';
    expect(checkInclusion(s1, s2)).toBe(false);
  });
});

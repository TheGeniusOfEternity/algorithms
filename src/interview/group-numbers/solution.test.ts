import { groupNumbers } from './solution';

describe('Group Numbers | Interview | Testcases', () => {
  test('#1 Groups numbers with same digit multiset (ignoring zeros)', () => {
    const numbers = [123, 321, 1023, 3201, 112, 12];
    const result = groupNumbers(numbers);
    expect(result).toEqual([[123, 321, 1023, 3201], [112], [12]]);
  });

  test('#2 Handles empty array', () => {
    expect(groupNumbers([])).toEqual([]);
  });

  test('#3 Single number – one group', () => {
    expect(groupNumbers([42])).toEqual([[42]]);
  });

  test('#4 Numbers with zeros are grouped correctly', () => {
    const numbers = [101, 110, 11, 1001];
    // 101 → digits {1,1} (zeros ignored) → "11"
    // 110 → digits {1,1} → "11"
    // 11  → digits {1,1} → "11"
    // 1001 → digits {1,1} → "11"
    expect(groupNumbers(numbers)).toEqual([[101, 110, 11, 1001]]);
  });

  test('#5 Different digit counts -> different groups', () => {
    const numbers = [12, 122, 112];
    // 12 → "12"
    // 122 → "122" (two 2s, one 1)
    // 112 → "112" (two 1s, one 2)
    expect(groupNumbers(numbers)).toEqual([[12], [122], [112]]);
  });

  test('#6 Preserves input order within groups', () => {
    const numbers = [321, 123, 213, 321];
    const result = groupNumbers(numbers);
    expect(result).toEqual([[321, 123, 213, 321]]);
  });

  test('#7 Groups with same digits but different zeros', () => {
    const numbers = [105, 501, 150, 51];
    // 105 → "15"
    // 501 → "15"
    // 150 → "15"
    // 51  → "15"
    expect(groupNumbers(numbers)).toEqual([[105, 501, 150, 51]]);
  });

  test('#8 Groups appear in order of first occurrence', () => {
    const numbers = [99, 123, 90009, 1032, 45, 54];
    // 99 → "99"
    // 123 → "123"
    // 90009 → "99"
    // 1032 → "123"
    // 45 → "45"
    // 54 → "45"
    expect(groupNumbers(numbers)).toEqual([
      [99, 90009],
      [123, 1032],
      [45, 54],
    ]);
  });
});

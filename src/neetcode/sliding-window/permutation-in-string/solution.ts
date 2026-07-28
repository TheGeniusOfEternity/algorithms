/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean} `true` if `s2` contains a permutation of `s1`, or `false` otherwise.
 * That means if a permutation of `s1` exists as a substring of `s2`
 */
export const checkInclusion = (s1: string, s2: string): boolean => {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Chars: Record<string, number | undefined> = {};
  for (const ch of s1) {
    s1Chars[ch] = (s1Chars[ch] ?? 0) + 1;
  }

  let l = 0;
  let r = 0;

  const s2Chars: Record<string, number | undefined> = {};

  while (r - l !== s1.length) {
    if (r === s2.length) {
      return false;
    }
    s2Chars[s2[r]] = (s2Chars[s2[r]] ?? 0) + 1;
    while ((s1Chars[s2[r]] ?? 0) < (s2Chars[s2[r]] ?? 0)) {
      const count = s2Chars[s2[l]] ?? 0;
      s2Chars[s2[l]] = count > 0 ? count - 1 : 0;
      l++;
    }
    r++;
  }

  return true;
};

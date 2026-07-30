/**
 * @param {string} s - first string
 * @param {string} t - second string
 * @return {string} the shortest substring of `s` such that every character in `t`, including duplicates,
 * is present in the substring. If such a substring does not exist, an empty string `""` will be returned.
 */
export const minWindow = (s: string, t: string): string => {
  if (t.length > s.length) {
    return '';
  }

  let mxLen = Infinity;
  let fulfilled = 0;

  const tChars: Record<string, number | undefined> = {};
  const sChars: Record<string, number | undefined> = {};
  const resIdx = [-1, -1];

  for (const ch of t) {
    tChars[ch] = (tChars[ch] ?? 0) + 1;
  }

  const need = Object.keys(tChars).length;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    sChars[s[r]] = (sChars[s[r]] ?? 0) + 1;

    if (sChars[s[r]] === tChars[s[r]]) {
      fulfilled++;
    }

    while (fulfilled === need) {
      if (r - l + 1 < mxLen) {
        mxLen = r - l + 1;
        resIdx[0] = l;
        resIdx[1] = r + 1;
      }

      sChars[s[l]] = (sChars[s[l]] ?? 0) - 1;
      if ((sChars[s[l]] ?? 0) < (tChars[s[l]] ?? 0)) {
        fulfilled--;
      }
      l++;
    }
  }

  return mxLen === Infinity ? '' : s.slice(resIdx[0], resIdx[1]);
};

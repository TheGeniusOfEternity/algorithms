/**
 * @param {string} s - a string consisting of only uppercase english characters
 * @param {number} k - maximum number of replacements
 * @return {number} - the length of the longest substring which contains only one distinct character.
 */
export const characterReplacement = (s: string, k: number): number => {
  const counts: Record<string, number> = {};
  let l = 0;
  let maxF = 0;
  let mx = 0;

  for (let r = 0; r < s.length; r++) {
    counts[s[r]] = (counts[s[r]] ?? 0) + 1;
    maxF = Math.max(maxF, counts[s[r]]);

    if (r - l + 1 - maxF > k) {
      counts[s[l]] = (counts[s[l]] ?? 0) - 1;
      l++;
    }
    mx = Math.max(mx, r - l + 1);
  }

  return mx;
};

/**
 * @param {string} s - a string of characters
 * @return {number} - the length of the longest substring without duplicate characters
 */
export const lengthOfLongestSubstring = (s: string): number => {
  let l = 0;
  let r = 0;
  let mx = 0;
  const unique = new Set<string>();
  while (r < s.length) {
    if (!unique.has(s[r])) {
      unique.add(s[r]);
      mx = Math.max(unique.size, mx);
      r++;
    } else {
      while (unique.has(s[r])) {
        unique.delete(s[l]);
        l++;
      }
    }
  }
  return mx;
};

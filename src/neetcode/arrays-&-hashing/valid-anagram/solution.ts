/**
 *
 * @param s - first string
 * @param t - second string
 * @returns true if the two strings are anagrams of each other, false otherwise
 */
export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  const sChars: Record<string, number | undefined> = {};
  const tChars: Record<string, number | undefined> = {};

  for (let i = 0; i < s.length; i++) {
    sChars[s[i]] = (sChars[s[i]] ?? 0) + 1;
    tChars[t[i]] = (tChars[t[i]] ?? 0) + 1;
  }

  for (const key in sChars) {
    if (sChars[key] !== tChars[key]) {
      return false;
    }
  }

  return true;
};

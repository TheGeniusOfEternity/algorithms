// Max subsequence in two strings

/**
 *
 * @param s first string
 * @param t second string
 *
 * @returns length of the longest common subsequence
 */
export const maxSubsequence = (s: string, t: string): number => {
  const n = s.length, m = t.length;
  const matrix: number[][] = Array.from({ length: n + 1}, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      matrix[i][j] = s[i - 1] === t[j - 1]
        ? matrix[i - 1][j - 1] + 1
        : Math.max(matrix[i][j - 1], matrix[i - 1][j])
    }
  }
  return matrix[n][m];
}
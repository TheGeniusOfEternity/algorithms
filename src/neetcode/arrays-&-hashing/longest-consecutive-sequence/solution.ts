/**
 * @param {number[]} nums - an array of integers
 * @return {number} - the length of the longest consecutive sequence of elements
 * (sequence of elements in which each element is exactly 1 greater than the previous element) that can be formed.
 */
export const longestConsecutive = (nums: number[]): number => {
  const unique = new Set<number>(nums);
  let mx = 0;

  for (const num of unique) {
    if (!unique.has(num - 1)) {
      let current = 1;
      while (unique.has(num + current)) {
        current++;
      }
      mx = Math.max(mx, current);
    }
  }

  return mx;
};

/**
 * @param {number[][]} matrix - `m x n` 2-D integer array.
 * - Each row in `matrix` is sorted in *non-decreasing* order.
 * - The first integer of every row is greater than the last integer of the previous row.
 * @param {number} target - an integer to be searched
 * @return {boolean} - `true` if `target` exists within `matrix` or `false` otherwise.
 */
export const searchMatrix = (matrix: number[][], target: number): boolean => {
  const m = matrix.length;
  const n = matrix[0].length;
  let start = 0;
  let end = m * n;

  while (start < end) {
    const middle = start + Math.floor((end - start) / 2);
    const row = Math.floor(middle / n);
    const col = middle % n;
    if (matrix[row][col] > target) {
      end = middle;
    } else if (matrix[row][col] < target) {
      start = middle + 1;
    } else {
      return true;
    }
  }

  return false;
};

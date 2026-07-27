/**
 * @param {number[]} heights - an integer array, where `heights[i]` represents the height of the `i-th` bar.
 * @return {number} - the maximum amount of water a container can store.
 */
export const maxArea = (heights: number[]): number => {
  let l = 0;
  let r = heights.length - 1;
  let mx = 0;
  while (l < r) {
    mx = Math.max(mx, Math.min(heights[l], heights[r]) * (r - l));
    if (heights[l] < heights[r]) {
      l++;
    } else if (heights[l] > heights[r]) {
      r--;
    } else {
      l++;
      r--;
    }
  }

  return mx;
};

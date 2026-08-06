/**
 * @param {number[]} nums - an array of **distinct** integers, sorted in ascending order.
 * @param {number} target - An integer to search for.
 * @return {number} Index of `target` in `nums` if it exists; otherwise `-1`.
 */
export const search = (nums: number[], target: number): number => {
  let start = 0;
  let end = nums.length;
  while (start < end) {
    const idx = Math.floor((start + end) / 2);
    if (target === nums[idx]) {
      return idx;
    } else if (target > nums[idx]) {
      start = idx + 1;
    } else {
      end = idx;
    }
  }
  return -1;
};

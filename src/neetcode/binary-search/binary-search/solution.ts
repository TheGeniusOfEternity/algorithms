/**
 * @param {number[]} nums - an array of **distinct** integers, sorted in ascending order.
 * @param {number} target - an integer.
 * @return {number} `target` index in `nums`, if exists, `-1` otherwise.
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

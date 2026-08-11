/**
 * @param {number[]} nums - an array of length `n` which was originally sorted in ascending order.
 * It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
 * - `[3,4,5,6,1,2`] if it was rotated `4` times.
 * - `[1,2,3,4,5,6]` if it was rotated `6` times.
 * All elements in the rotated sorted array `nums` are **unique**
 * @param {number} target - element to search in `nums` array
 * @return {number} the index of `target` within `nums`, or `-1` if it is not present.
 * Algorithm should run in `O(log n)` time.
 */
export const search = (nums: number[], target: number): number => {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] < nums[r]) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  let start = target >= nums[l] && target <= nums[nums.length - 1] ? l : 0;
  let end = target >= nums[l] && target <= nums[nums.length - 1] ? nums.length : l;

  while (start < end) {
    const m = start + Math.floor((end - start) / 2);
    if (target > nums[m]) {
      start = m + 1;
    } else if (target < nums[m]) {
      end = m;
    } else {
      return m;
    }
  }

  return -1;
};

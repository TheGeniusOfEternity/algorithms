/**
 * @param {number[]} nums - an array of length `n` which was originally sorted in ascending order.
 * It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
 * - `[3,4,5,6,1,2`] if it was rotated `4` times.
 * - `[1,2,3,4,5,6]` if it was rotated `6` times.
 * All elements in the rotated sorted array `nums` are **unique**
 * @return {number} the minimum element in `O(log n)` time
 */
export const findMin = (nums: number[]): number => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return nums[start];
};

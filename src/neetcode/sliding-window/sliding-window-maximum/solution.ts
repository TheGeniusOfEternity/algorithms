/**
 * @param {number[]} nums - an array of integers
 * @param {number} k - integer
 * @return {number[]} a list that contains the maximum element in the sliding window at each step.
 * The window of size `k` starts at the left edge of the array slides one position to the right until
 * it reaches the right edge of the array.
 */
export const maxSlidingWindow = (nums: number[], k: number): number[] => {
  const n = nums.length;
  const leftMax = new Array<number>(n);
  const rightMax = new Array<number>(n);

  leftMax[0] = nums[0];
  rightMax[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    if (i % k === 0) {
      leftMax[i] = nums[i];
    } else {
      leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
    }

    if ((n - 1 - i) % k === 0) {
      rightMax[n - 1 - i] = nums[n - 1 - i];
    } else {
      rightMax[n - 1 - i] = Math.max(rightMax[n - i], nums[n - 1 - i]);
    }
  }

  const output = new Array<number>(n - k + 1);

  for (let i = 0; i < n - k + 1; i++) {
    output[i] = Math.max(leftMax[i + k - 1], rightMax[i]);
  }

  return output;
};

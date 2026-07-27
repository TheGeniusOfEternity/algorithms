/**
 * @param {number[]} numbers - an array of integers, sorted in non-decreasing order
 * @param {number} target - target numbe
 * @return {number[]} - the indices *(1-indexed)* of two numbers, `[index1, index2]`,
 * such that they add up to a given target number `target` and `index1 < index2`
 */
export const twoSum = (numbers: number[], target: number): number[] => {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    }
    if (sum > target) {
      r--;
    } else {
      l++;
    }
  }
  return [-1, -1];
};

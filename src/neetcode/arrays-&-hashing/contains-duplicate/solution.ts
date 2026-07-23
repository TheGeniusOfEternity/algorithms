/**
 * @param nums - integer array
 * @return `true` if any value appears more than once in the array, `false` otherwise
 */
export const hasDuplicate = (nums: number[]): boolean => nums.length !== new Set(nums).size;

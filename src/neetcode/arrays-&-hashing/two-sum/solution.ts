/**
 *
 * @param nums - array of integers
 * @param target - integer num
 *
 * @returns the indices `i` and `j` such that `nums[i] + nums[j] === target` and `i != j`
 */
export const twoSum = (nums: number[], target: number): number[] => {
  const subs: Record<number, number | undefined> = {};

  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];
    const j = subs[sub];
    if (j !== undefined) {
      return [j, i];
    }
    subs[nums[i]] = i;
  }

  return [-1, -1];
};

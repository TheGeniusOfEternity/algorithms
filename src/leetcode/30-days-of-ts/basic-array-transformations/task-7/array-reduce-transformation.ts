/**
 *
 * @param nums - array of numbers
 * @param fn - reducer function, executed on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
 * @param init - initial value
 *
 * @returns result, achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
 */
export const reduce = (
  nums: number[],
  fn: (accum: number, curr: number) => number,
  init: number,
): number => {
  let result = init;
  for (const num of nums) {
    result = fn(result, num);
  }
  return result;
};

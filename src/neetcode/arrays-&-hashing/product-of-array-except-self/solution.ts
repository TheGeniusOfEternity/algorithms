/**
 * @param {number[]} nums - an integer array
 * @return {number[]} - an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`
 */
export const productExceptSelf = (nums: number[]): number[] => {
  const products = Array.from<number>({ length: nums.length }).fill(0);
  let product = 1;
  let zeros = 0;

  for (const num of nums) {
    if (num === 0) {
      zeros++;
    } else {
      product *= num;
    }
  }

  if (zeros > 1) {
    return products;
  }

  for (let i = 0; i < nums.length; i++) {
    products[i] =
      zeros === 1 ? (nums[i] === 0 ? product : 0) : product / nums[i];
  }

  return products;
};

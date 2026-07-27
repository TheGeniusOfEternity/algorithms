/**
 * @param {number[]} nums - an integer array
 * @return {number[][]} - all the triplets `[nums[i], nums[j], nums[k]]` where `nums[i] + nums[j] + nums[k] == 0`,
 * and the indices `i, j, k` are all distinct.
 */
export const threeSum = (nums: number[]): number[][] => {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }
  return res;
};

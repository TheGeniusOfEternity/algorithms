/**
 * @param {number[]} height - an array of non-negative integers which represent an elevation map.
 * Each value `height[i]` represents the height of a bar, which has a width of `1`.
 * @return {number} - the maximum area of water that can be trapped between the bars.
 */
export const trap = (height: number[]): number => {
  if (height.length === 0) {
    return 0;
  }

  let l = 0;
  let r = height.length - 1;
  let lMax = height[l];
  let rMax = height[r];
  let res = 0;

  while (l < r) {
    if (lMax < rMax) {
      l++;
      lMax = Math.max(lMax, height[l]);
      res += lMax - height[l];
    } else {
      r--;
      rMax = Math.max(rMax, height[r]);
      res += rMax - height[r];
    }
  }

  return res;
};

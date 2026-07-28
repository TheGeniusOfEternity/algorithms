/**
 * @param {number[]} prices - an integer array, where `prices[i]` is the price of NeetCoin on the `ith` day.
 * @return {number} - the maximum profit that can be achieved.
 */
export const maxProfit = (prices: number[]): number => {
  let l = 0;
  let r = 1;
  let mxProfit = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l];
      mxProfit = Math.max(mxProfit, profit);
    } else {
      l = r;
    }
    r++;
  }

  return mxProfit;
};

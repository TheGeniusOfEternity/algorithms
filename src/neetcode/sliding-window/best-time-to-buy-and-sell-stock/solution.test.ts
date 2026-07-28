import { maxProfit } from './solution';

describe('Best Time To Buy And Sell Stock | NeetCode RoadMap | Testcases', () => {
  test('#1 Buy on day 2, sell on day 5', () => {
    const prices = [10, 1, 5, 6, 7, 1];
    const output = maxProfit(prices);
    expect(output).toBe(6);
  });

  test('#2 No buy, no sell', () => {
    const prices = [10, 8, 7, 5, 2];
    const output = maxProfit(prices);
    expect(output).toBe(0);
  });
});

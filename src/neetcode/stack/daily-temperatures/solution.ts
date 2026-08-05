/**
 * @param {number[]} temperatures - array of integers where `temperatures[i]` represents
 * the daily temperatures on the `ith` day.
 * @return {number[]} - where `result[i]` is the number of days after the `ith` day before a warmer
 * temperature appears on a future day. If there is no day in the future where a warmer temperature
 * will appear for the `ith` day, `result[i]` will be set to `0`.
 */
export const dailyTemperatures = (temperatures: number[]): number[] => {
  const stack: number[][] = [];
  const res = new Array<number>(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];
    while (stack.length > 0 && t > stack[stack.length - 1][0]) {
      const [, stackInd] = stack.pop() ?? [-1, -1];
      res[stackInd] = i - stackInd;
    }
    stack.push([t, i]);
  }
  return res;
};

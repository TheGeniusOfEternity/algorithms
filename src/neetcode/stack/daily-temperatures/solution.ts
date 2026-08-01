/**
 * @param {number[]} temperatures - array of integers where `temperatures[i]` represents
 * the daily temperatures on the `ith` day.
 * @return {number[]} - where `result[i]` is the number of days after the `ith` day before a warmer
 * temperature appears on a future day. If there is no day in the future where a warmer temperature
 * will appear for the `ith` day, `result[i]` will be set to `0`.
 */
export const dailyTemperatures = (temperatures: number[]): number[] => {
  const stack: number[] = [];
  const result = Array.from({ length: temperatures.length }, () => 0);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    stack.push(temperatures[i]);
    for (let j = 0; j < stack.length - 1; j++) {
      if (stack[j] > temperatures[i]) {
        result[i] = stack.length - j - 1;
      }
    }
  }
  return result;
};

import { dailyTemperatures } from './solution';

describe('Daily Temperatures | NeetCode | RoadMap | Testcases', () => {
  test('#1 Average case', () => {
    const temperatures = [30, 38, 30, 36, 35, 40, 28];
    const expected = [1, 4, 1, 2, 1, 0, 0];
    const output = dailyTemperatures(temperatures);
    expect(output).toEqual(expected);
  });

  test('#2 No warmer temperatures', () => {
    const temperatures = [22, 21, 20];
    const expected = [0, 0, 0];
    const output = dailyTemperatures(temperatures);
    expect(output).toEqual(expected);
  });
});

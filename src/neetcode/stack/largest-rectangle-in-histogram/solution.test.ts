import { largestRectangleArea } from './solution';

describe('Largest Rectangle In Histogram | NeetCode | RoadMap | Testcases', () => {
  test('#1 Horizontal largest', () => {
    const heights = [7, 1, 7, 2, 2, 4];
    const expected = 8;
    const output = largestRectangleArea(heights);
    expect(output).toBe(expected);
  });

  test('#2 One width largest', () => {
    const heights = [1, 3, 7];
    const expected = 7;
    const output = largestRectangleArea(heights);
    expect(output).toBe(expected);
  });

  test('#3 Vertical largest', () => {
    const heights = [2, 1, 5, 6, 2, 3];
    const expected = 10;
    const output = largestRectangleArea(heights);
    expect(output).toBe(expected);
  });
});

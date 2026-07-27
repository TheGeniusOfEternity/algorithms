import { maxArea } from './solution';

describe('Container With Most Water | NeetCode | RoadMap | Testcases', () => {
  test('#1 Different Heights', () => {
    const heights = [1, 7, 2, 5, 4, 7, 3, 6];
    expect(maxArea(heights)).toBe(36);
  });

  test('#2 Same heights', () => {
    const heights = [2, 2, 2];
    expect(maxArea(heights)).toBe(4);
  });
});

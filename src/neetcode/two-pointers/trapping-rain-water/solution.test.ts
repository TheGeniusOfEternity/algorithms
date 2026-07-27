import { trap } from './solution';

describe('Trapping Rain Water | NeetCode | RoadMap | Testcases', () => {
  test('#1', () => {
    const height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
    expect(trap(height)).toBe(9);
  });
});

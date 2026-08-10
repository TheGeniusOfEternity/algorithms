import { minEatingSpeed } from './solution';

describe('Koko Eating Bananas | NeetCode | RoadMap | Testcases', () => {
  test('#1', () => {
    const piles = [1, 4, 3, 2];
    const h = 9;
    const expected = 2;
    const output = minEatingSpeed(piles, h);
    expect(output).toBe(expected);
  });

  test('#2', () => {
    const piles = [25, 10, 23, 4];
    const h = 4;
    const expected = 25;
    const output = minEatingSpeed(piles, h);
    expect(output).toBe(expected);
  });
});

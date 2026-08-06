import { carFleet } from './solution';

describe('Car Fleet | NeetCode | RoadMap | Testcases', () => {
  test('#1 Single Fleet', () => {
    const target = 10;
    const position = [1, 4];
    const speed = [3, 2];
    const expected = 1;
    const output = carFleet(target, position, speed);
    expect(output).toBe(expected);
  });

  test('#2 Multiple Fleets', () => {
    const target = 10;
    const position = [4, 1, 0, 7];
    const speed = [2, 2, 1, 1];
    const expected = 3;
    const output = carFleet(target, position, speed);
    expect(output).toBe(expected);
  });
});

import { filter } from './filter-elements-from-array';

describe('Task #6 | Filter Elements From Array | Example testcases', () => {
  test('#1 Greater Than 10', () => {
    const input = [0, 10, 20, 30];
    const fn = (n: number): boolean => n > 10;
    const expected = [20, 30];
    const output = filter(input, fn);
    expect(output).toEqual(expected);
  });

  test('#2 First Index', () => {
    const input = [1, 2, 3];
    const fn = (_: number, i: number): i is 0 => i === 0;
    const expected = [1];
    const output = filter(input, fn);
    expect(output).toEqual(expected);
  });

  test('#3 Plus one', () => {
    const input = [-2, -1, 0, 1, 2];
    const fn = (n: number): number => ++n;
    const expected = [-2, 0, 1, 2];
    const output = filter(input, fn);
    expect(output).toEqual(expected);
  });
});

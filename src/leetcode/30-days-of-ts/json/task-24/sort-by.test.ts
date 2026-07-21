import { JSONValue, sortBy } from './sort-by';

describe('Task #24 | Sort By | Testcases', () => {
  test('#1 Sort by element value', () => {
    const arr = [5, 4, 1, 2, 3];
    const fn = (x: JSONValue): number => Number(x);
    const expected = [1, 2, 3, 4, 5];
    const output = sortBy(arr, fn);
    expect(output).toEqual(expected);
  });

  test('#2 Sort by element property value', () => {
    const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
    const fn = (d: JSONValue): number => (d as { x: number }).x;
    const expected = [{ x: -1 }, { x: 0 }, { x: 1 }];
    const output = sortBy(arr, fn);
    expect(output).toEqual(expected);
  });

  test('#3 Sort by subarrays element value', () => {
    const arr = [
      [3, 4],
      [5, 2],
      [10, 1],
    ];
    const fn = (x: JSONValue): number => (x as number[])[1];
    const expected = [
      [10, 1],
      [5, 2],
      [3, 4],
    ];
    const output = sortBy(arr, fn);
    expect(output).toEqual(expected);
  });
});

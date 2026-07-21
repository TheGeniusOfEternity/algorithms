import { flat } from './flatten-deeply-nested-array';

describe('Task #26 | Flatten Deeply Nested Array | Testcases', () => {
  test('#1 n = 0 depth', () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 0;
    const output = flat(arr, n);
    const expected = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    expect(output).toEqual(expected);
  });

  test('#2 n = 1 depth', () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 1;
    const output = flat(arr, n);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15];
    expect(output).toEqual(expected);
  });

  test('#3 n = 2 depth', () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 2;
    const output = flat(arr, n);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(output).toEqual(expected);
  });
});

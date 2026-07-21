import { join } from './join-two-arrays-by-id';

describe('Task #25 | Join Two Arrays By Id | Testcases', () => {
  test('#1 Two arrays with unique keys', () => {
    const arr1 = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ];
    const arr2 = [{ id: 3, x: 5 }];
    const expected = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
      { id: 3, x: 5 },
    ];
    const output = join(arr1, arr2);
    expect(output).toEqual(expected);
  });

  test('#2 Two arrays with duplicated keys', () => {
    const arr1 = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ];
    const arr2 = [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ];
    const expected = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ];
    const output = join(arr1, arr2);
    expect(output).toEqual(expected);
  });

  test('#3 Two arrays with nested objects', () => {
    const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
    const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
    const expected = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }];
    const output = join(arr1, arr2);
    expect(output).toEqual(expected);
  });
});

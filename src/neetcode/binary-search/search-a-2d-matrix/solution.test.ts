import { searchMatrix } from './solution';

describe('Search A 2D Matrix | NeetCode | RoadMap | Testcases', () => {
  test('#1 Target is in matrix, first row', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 3;
    const output = searchMatrix(matrix, target);
    expect(output).toBe(true);
  });

  test('#2 Target is in matrix, second row', () => {
    const matrix = [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40],
    ];
    const target = 10;
    const output = searchMatrix(matrix, target);
    expect(output).toBe(true);
  });

  test('#3 Target is not in matrix', () => {
    const matrix = [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40],
    ];
    const target = 15;
    const output = searchMatrix(matrix, target);
    expect(output).toBe(false);
  });

  test('#4 Single element in matrix', () => {
    const matrix = [[1]];
    const target = 3;
    const output = searchMatrix(matrix, target);
    expect(output).toBe(false);
  });
});

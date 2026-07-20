import { chunk, JSONValue } from "./chunk-array";

describe('Task #21 | Chunk Array | Testcases', () => {
  test('#1 One Item Chunk', () => {
    const arr: JSONValue[] = [1, 2, 3, 4, 5];
    const size = 1;
    const output = chunk(arr, size);
    const expected = [[1], [2], [3], [4], [5]];
    expect(output).toEqual(expected);
  });

  test('#2 Not Full Chunks', () => {
    const arr: JSONValue[] = [1, 9, 6, 3, 2];
    const size = 3;
    const output = chunk(arr, size);
    const expected = [[1, 9, 6], [3, 2]];
    expect(output).toEqual(expected);
  });

  test('#3 Full Array Chunk', () => {
    const arr: JSONValue[] = [8, 5, 3, 2, 6];
    const size = 6;
    const output = chunk(arr, size);
    const expected = [[8, 5, 3, 2, 6]];
    expect(output).toEqual(expected);
  });

  test('#4 Empty Array', () => {
    const arr: JSONValue[] = [];
    const size = 1;
    const output = chunk(arr, size);
    const expected: JSONValue[] = [];
    expect(output).toEqual(expected);
  });
})
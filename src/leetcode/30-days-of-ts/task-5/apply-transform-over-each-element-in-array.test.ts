import { map } from "./apply-transform-over-each-element-in-array";

describe('Task #5 | Apply Transform Over Each Element in Array II | Example testcases', () => {
  test('#1 Increment Each Value By One', () => {
    const expected = [2, 3, 4];
    const input = [1, 2, 3];
    const fn = (n: number) => ++n;
    const output = map(input, fn);
    expect(output).toEqual(expected);
  })

  test('#2 Increment Each Value By N', () => {
    const expected = [1, 3, 5];
    const input = [1, 2, 3];
    const fn = (n: number, i: number) => n + i;
    const output = map(input, fn);
    expect(output).toEqual(expected);
  })

  test('#1 Replace each value with constant', () => {
    const expected = [42, 42, 42];
    const input = [10, 20, 30];
    const fn = () => 42;
    const output = map(input, fn);
    expect(output).toEqual(expected);
  })
})
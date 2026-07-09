import { compose, F } from "./function-composition";

describe('Task #8 | Function Composition | Example testcases', () => {
  test('#1 Add & Multiply', () => {
    const functions: F[] = [
      (x: number) => x + 1,
      (x: number) => x * x,
      (x: number) => 2 * x
    ];
    const input = 4;
    const fn = compose(functions)
    const output = fn(input)
    const expected = 65;
    expect(output).toBe(expected);
  })

  test('#2 Same Functions', () => {
    const functions: F[] = [
      (x: number) => 10 * x,
      (x: number) => 10 * x,
      (x: number) => 10 * x,
    ];
    const input = 1;
    const fn = compose(functions)
    const output = fn(input)
    const expected = 1000;
    expect(output).toBe(expected);
  })

  test('#3 No Functions', () => {
    const functions: F[] = [];
    const input = 42;
    const fn = compose(functions)
    const output = fn(input)
    const expected = 42;
    expect(output).toBe(expected);
  })
})
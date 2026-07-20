import { isEmpty } from "./is-object-empty";

describe('Task #20 | Is Object Empty | Example testcases', () => {
  test('#1 Not Empty Object', () => {
    const input = {
      x: 5,
      y: 42
    };
    const output = isEmpty(input);
    const expected = false;
    expect(output).toBe(expected);
  })

  test('#2 Empty Object', () => {
    const input = {};
    const output = isEmpty(input);
    const expected = true;
    expect(output).toBe(expected);
  })

  test('#3 Not Empty Array', () => {
    const input = [null, false, 0];
    const output = isEmpty(input);
    const expected = false;
    expect(output).toBe(expected);
  })

  test('#4 Empty Array', () => {
    const input: string[] = [];
    const output = isEmpty(input);
    const expected = true;
    expect(output).toBe(expected);
  })
})
import { JSONValue, once } from "./allow-one-function-call";

describe('Task #10 | Allow One Function Call | Example Testcases', () => {
  test('#1 Two Calls', () => {
    const calls = [[1, 2, 3], [2, 3, 6]];
    const fn = (a: number, b: number, c: number) => a + b + c;
    const onceFn = once(fn);
    const expected: { calls: number, value: JSONValue } = {calls: 1, value: 6};
    const output: { calls: number, value: JSONValue }  = {calls: 0, value: 0};
    calls.forEach((call) => {
      const result = onceFn(...call);
      if (result !== undefined) {
        output.calls++;
        output.value = result;
      }
    });
    expect(output).toEqual(expected);
  });

  test('#1 Three Calls', () => {
    const calls = [[5,7,4],[2,3,6],[4,6,8]];
    const fn = (a: number, b: number, c: number) => a * b * c;
    const onceFn = once(fn);
    const expected: { calls: number, value: JSONValue } = {calls: 1, value: 140};
    const output: { calls: number, value: JSONValue }  = {calls: 0, value: 0};
    calls.forEach((call) => {
      const result = onceFn(...call);
      if (result !== undefined) {
        output.calls++;
        output.value = result;
      }
    });
    expect(output).toEqual(expected);
  });
})
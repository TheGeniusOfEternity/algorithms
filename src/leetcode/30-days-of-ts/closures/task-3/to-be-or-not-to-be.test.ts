import { expect as fn } from "./to-be-or-not-to-be";

describe("Task #3 | To Be Or Not To Be | Check example testcases", () => {
  test('#1 .toBe success', () => {
    const expected = true;
    const output = fn(5).toBe(5);
    expect(output).toBe(expected);
  })

  test('#2 .toBe error', () => {
    const expected = new Error("Not Equal")
    let output;
    try {
      output = fn(5).toBe(null);
    } catch (error) {
      output = error
    }
    expect(output).toEqual(expected)
  })

  test('#3 .notToBe success', () => {
    const expected = true;
    const output = fn(5).notToBe(null);
    expect(output).toBe(expected);
  })
})
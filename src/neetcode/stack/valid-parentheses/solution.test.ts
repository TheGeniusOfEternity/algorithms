import { isValid } from './solution';

describe('Valid Parentheses | NeetCode | RoadMap | Testcases', () => {
  test('#1 Simple pair', () => {
    const s = '[]';
    const output = isValid(s);
    const expected = true;
    expect(output).toBe(expected);
  });

  test('#2 Nested different types', () => {
    const s = '([{}])';
    const output = isValid(s);
    const expected = true;
    expect(output).toBe(expected);
  });

  test('#3 Nested Incorrectly', () => {
    const s = '[(])';
    const output = isValid(s);
    const expected = false;
    expect(output).toBe(expected);
  });
});

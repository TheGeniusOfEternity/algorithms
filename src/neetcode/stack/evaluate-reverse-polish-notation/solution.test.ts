import { evalRPN } from './solution';

describe('Evaluate Reverse Polish Notation | NeetCode | RoadMap | Testcases', () => {
  test('#1 Evaluates multiplication after addition', () => {
    const tokens = ['2', '1', '+', '3', '*', '4', '-'];
    const expected = 5;
    const output = evalRPN(tokens);

    expect(output).toBe(expected);
  });

  test('#2 Evaluates division and addition', () => {
    const tokens = ['4', '13', '5', '/', '+'];
    const expected = 6;
    const output = evalRPN(tokens);

    expect(output).toBe(expected);
  });

  test('#3 Evaluates a complex expression', () => {
    const tokens = [
      '10',
      '6',
      '9',
      '3',
      '+',
      '-11',
      '*',
      '/',
      '*',
      '17',
      '+',
      '5',
      '+',
    ];
    const expected = 22;
    const output = evalRPN(tokens);

    expect(output).toBe(expected);
  });

  test('#4 Truncates division toward zero', () => {
    const tokens = ['-7', '3', '/'];
    const expected = -2;
    const output = evalRPN(tokens);

    expect(output).toBe(expected);
  });
});

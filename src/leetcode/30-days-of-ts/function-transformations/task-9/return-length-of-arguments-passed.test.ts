import { argumentsLength } from './return-length-of-arguments-passed';

describe('Task #9 | Return Length of Arguments Passed | Example Testcases', () => {
  test('#1 Single value', () => {
    const input = [1];
    const expected = 1;
    const output = argumentsLength(...input);
    expect(output).toBe(expected);
  });

  test('#2 Multiple values with different types', () => {
    const input = [{}, null, '3'];
    const expected = 3;
    const output = argumentsLength(...input);
    expect(output).toBe(expected);
  });
});

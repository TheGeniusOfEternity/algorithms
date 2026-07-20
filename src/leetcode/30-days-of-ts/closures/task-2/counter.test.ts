import { createCounter } from './counter';

describe('Task #2 | Counter | Check example testcases', () => {
  test('Example #1', () => {
    const n = 10;
    const calls = ['call', 'call', 'call'];
    const expected = [10, 11, 12];

    const counter = createCounter(n);
    const output: number[] = [];
    calls.forEach(() => output.push(counter()));
    expect(output).toEqual(expected);
  });

  test('Example #2', () => {
    const n = -2;
    const calls = ['call', 'call', 'call', 'call', 'call'];
    const expected = [-2, -1, 0, 1, 2];
    const counter = createCounter(n);
    const output: number[] = [];
    calls.forEach(() => output.push(counter()));
    expect(output).toEqual(expected);
  });
});

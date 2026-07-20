import { createCounter } from './counter-ii';

describe('Task #4 | Counter II | Example testcases', () => {
  test('#1 Basic Behavior', () => {
    const input = {
      init: 5,
      calls: ['increment', 'reset', 'decrement'],
    };
    const output: number[] = [];
    const expected = [6, 5, 4];
    const counter = createCounter(input.init);
    input.calls.forEach((call) => {
      output.push(counter[call as keyof typeof counter]());
    });
    expect(output).toEqual(expected);
  });

  test('#1 Double method Behavior ', () => {
    const input = {
      init: 0,
      calls: ['increment', 'increment', 'decrement', 'reset', 'reset'],
    };
    const output: number[] = [];
    const expected = [1, 2, 1, 0, 0];
    const counter = createCounter(input.init);
    input.calls.forEach((call) => {
      output.push(counter[call as keyof typeof counter]());
    });
    expect(output).toEqual(expected);
  });
});

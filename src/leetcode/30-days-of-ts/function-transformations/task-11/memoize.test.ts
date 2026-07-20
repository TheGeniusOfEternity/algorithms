import { Fn, memoize } from './memoize';

describe('Task #11 | Memoize | Example testcases', () => {
  const completeOutput = (
    memoizedFn: Fn,
    actions: string[],
    values: number[][],
    callCount: { value: number },
  ): number[] => {
    const output: number[] = [];
    for (let i = 0; i < actions.length; i++) {
      if (actions[i] === 'call') {
        output.push(memoizedFn(...values[i]));
      } else {
        output.push(callCount.value);
      }
    }
    return output;
  };

  const trackCalls = (callCount: { value: number }, fn: Fn) => {
    return (...args: number[]): number => {
      callCount.value++;
      return fn(...args);
    };
  };

  test('#1 Sum Function', () => {
    const callCount = { value: 0 };
    const sum = (a: number, b: number): number => a + b;
    const memoizedFn = memoize(trackCalls(callCount, sum));
    const actions = ['call', 'call', 'getCallCount', 'call', 'getCallCount'];
    const values = [[2, 2], [2, 2], [], [1, 2], []];
    const expected = [4, 4, 1, 3, 2];
    const output: number[] = completeOutput(memoizedFn, actions, values, callCount);
    expect(output).toEqual(expected);
  });

  test('#2 Factorial Function', () => {
    const callCount = { value: 0 };
    const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
    const memoizedFn = memoize(trackCalls(callCount, factorial));
    const actions = ['call', 'call', 'call', 'getCallCount', 'call', 'getCallCount'];
    const values = [[2], [3], [2], [], [3], []];
    const expected = [2, 6, 2, 2, 6, 2];
    const output: number[] = completeOutput(memoizedFn, actions, values, callCount);
    expect(output).toEqual(expected);
  });

  test('#3 Fib Function', () => {
    const callCount = { value: 0 };
    const fib = (n: number): number => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
    const memoizedFn = memoize(trackCalls(callCount, fib));
    const actions = ['call', 'getCallCount'];
    const values = [[5], []];
    const expected = [8, 1];
    const output: number[] = completeOutput(memoizedFn, actions, values, callCount);
    expect(output).toEqual(expected);
  });
});

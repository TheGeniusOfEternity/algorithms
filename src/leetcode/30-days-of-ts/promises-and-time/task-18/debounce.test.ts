import { debounce } from './debounce';
import { F } from '../../function-transformations/task-8/function-composition';

describe('Task #18 | Debounce | Example Testcases', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const runTest = (calls: { t: number; inputs: number[] }[], t: number, fn: F): void => {
    let currentTime = 0;
    const debounced = debounce(fn, t);
    for (const call of calls) {
      const timeToAdvance = call.t - currentTime;
      if (timeToAdvance > 0) {
        jest.advanceTimersByTime(timeToAdvance);
      }
      debounced(...call.inputs);
      currentTime = call.t;
    }
    jest.advanceTimersByTime(t);
  };

  test('#1 | Debounced Once for last call', () => {
    const fn = jest.fn();
    const calls = [
      { t: 50, inputs: [1] },
      { t: 75, inputs: [2] },
    ];
    const t = 50;
    runTest(calls, t, fn);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(2);
  });

  test('#2 | Debounced twice - for all calls', () => {
    const fn = jest.fn();
    const calls = [
      { t: 50, inputs: [1] },
      { t: 100, inputs: [2] },
    ];
    const t = 20;
    runTest(calls, t, fn);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith(1);
    expect(fn).toHaveBeenCalledWith(2);
  });

  test('#3 | Debounced twice - first and last calls', () => {
    const fn = jest.fn();
    const calls = [
      { t: 50, inputs: [1, 2] },
      { t: 300, inputs: [3, 4] },
      { t: 300, inputs: [5, 6] },
    ];
    const t = 150;
    runTest(calls, t, fn);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith(1, 2);
    expect(fn).toHaveBeenCalledWith(5, 6);
  });
});

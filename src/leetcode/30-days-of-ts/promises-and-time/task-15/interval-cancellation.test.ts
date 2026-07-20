import { cancellable } from './interval-cancellation';

describe('Task #15 | Interval Cancellation | Example Testcases', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('#1 One Arg Repeated', () => {
    jest.useFakeTimers();
    const fn = jest.fn((x) => x * 2);
    const args = [4];
    const t = 35;
    const cancelFn = cancellable(fn, args, t);
    const cancelTimeMs = 190;
    jest.advanceTimersByTime(cancelTimeMs);
    cancelFn();
    expect(fn).toHaveBeenCalledTimes(6);
    expect(fn.mock.results.map((r) => Number(r.value))).toEqual([8, 8, 8, 8, 8, 8]);
  });

  test('#2 Two Args Repeated', () => {
    jest.useFakeTimers();
    const fn = jest.fn((x1, x2) => x1 * x2);
    const args = [2, 5];
    const t = 30;
    const cancelFn = cancellable(fn, args, t);
    const cancelTimeMs = 165;
    jest.advanceTimersByTime(cancelTimeMs);
    cancelFn();
    expect(fn).toHaveBeenCalledTimes(6);
    expect(fn.mock.results.map((r) => Number(r.value))).toEqual([10, 10, 10, 10, 10, 10]);
  });

  test('#3 Three Args Repeated', () => {
    jest.useFakeTimers();
    const fn = jest.fn((x1, x2, x3): number => Number(x1) + Number(x2) + Number(x3));
    const args = [5, 1, 3];
    const t = 50;
    const cancelFn = cancellable(fn, args, t);
    const cancelTimeMs = 180;
    jest.advanceTimersByTime(cancelTimeMs);
    cancelFn();
    expect(fn).toHaveBeenCalledTimes(4);
    expect(fn.mock.results.map((r) => Number(r.value))).toEqual([9, 9, 9, 9]);
  });
});

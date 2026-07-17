import { cancellable, Fn } from "./timeout-cancellation";
import { JSONValue } from "../../function-transformations/task-10/allow-one-function-call";

describe('Task #14 | Timeout Cancellation | Example testcases', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('#1 Execute before Cancel', () => {
    const fn: Fn = jest.fn((...args: JSONValue[]) => (args[0] as number) * 5);
    const args = [2];
    const t = 20;
    const cancelTimeMs = 50;
    const cancelFn = cancellable(fn, args, t);
    setTimeout(cancelFn, cancelTimeMs);
    jest.advanceTimersByTime(t);
    expect(fn).toHaveReturnedWith(10);
  });

  test('#2 Cancel Before Execution', () => {
    const fn: Fn = (...args: JSONValue[]) => (args[0] as number) ** 2;
    const args = [2];
    const t = 100;
    const expected: { time: number, return: number }[] = [];
    const output: { time: number, return: number }[] = [];
    const cancelTimeMs = 50;
    const cancelFn = cancellable(fn, args, t)
    setTimeout(() => {
      cancelFn()
      expect(output).toEqual(expected);
    }, cancelTimeMs)
  })
})
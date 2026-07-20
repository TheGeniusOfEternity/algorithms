import { TimeLimitedCache } from './cache-with-time-limit';

describe('Task #17 | Cache With Time Limit', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const execute = (actions: string[], values: number[][], timeDelays: number[]): unknown[] => {
    const cache = new TimeLimitedCache();
    const result: unknown[] = [null];

    let prevTime = 0;

    for (let i = 1; i < actions.length; i++) {
      const delay = timeDelays[i];
      const diff = delay - prevTime;

      if (diff > 0) {
        jest.advanceTimersByTime(diff);
      }

      const action = actions[i];
      const args = values[i];
      let res: unknown;

      switch (action) {
        case 'set':
          res = cache.set(args[0], args[1], args[2]);
          break;
        case 'get':
          res = cache.get(args[0]);
          break;
        case 'count':
          res = cache.count();
          break;
        default:
          res = null;
      }

      result.push(res);
      prevTime = delay;
    }

    return result;
  };

  test('#1 Simple Operations', () => {
    const actions = ['TimeLimitedCache', 'set', 'get', 'count', 'get'];
    const values = [[], [1, 42, 100], [1], [], [1]];
    const timeDelays = [0, 0, 50, 50, 150];
    const expected = [null, false, 42, 1, -1];
    const result = execute(actions, values, timeDelays);
    expect(result).toEqual(expected);
  });

  test('#2 Repeated Operations', () => {
    const actions = ['TimeLimitedCache', 'set', 'set', 'get', 'get', 'get', 'count'];
    const values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []];
    const timeDelays = [0, 0, 40, 50, 120, 200, 250];
    const expected = [null, false, true, 50, 50, -1, 0];
    const result = execute(actions, values, timeDelays);
    expect(result).toEqual(expected);
  });
});

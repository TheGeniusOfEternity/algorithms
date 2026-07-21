import { Fn, timeLimit } from './promise-time-limit';

interface TimeLimitResolved {
  status: 'resolved';
  resolved: unknown;
  time: number;
}
interface TimeLimitRejected {
  status: 'rejected';
  rejected: unknown;
  time: number;
}

describe('Task #16', () => {
  const testLimited = async (
    limited: Fn,
    args: number[],
  ): Promise<TimeLimitResolved | TimeLimitRejected> => {
    const start = performance.now();
    let output: TimeLimitResolved | TimeLimitRejected;
    try {
      const success = await limited(...args);
      output = {
        status: 'resolved',
        resolved: success,
        time: Math.floor(performance.now() - start),
      };
    } catch (err) {
      output = {
        status: 'rejected',
        rejected: (err as Error).message,
        time: Math.floor(performance.now() - start),
      };
    }
    return output;
  };
  test('One Arg Limit Exceeded', async () => {
    const fn = async (n: number): Promise<number> => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };
    const inputs = [5];
    const t = 50;
    const expected = { rejected: 'Time Limit Exceeded', time: 50 };
    const limited = timeLimit(fn, t);
    const start = performance.now();
    let output;
    try {
      const res = await limited(...inputs);
      output = { resolved: res, time: Math.floor(performance.now() - start) };
    } catch (err) {
      output = { rejected: err, time: Math.floor(performance.now() - start) };
    }
    expect(output.rejected).toBe(expected.rejected);
    expect(output.time).toBeCloseTo(expected.time, -2);
  });

  test('One Arg Limit Not Exceeded', async () => {
    const fn = async (n: number): Promise<number> => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };
    const inputs = [5];
    const t = 150;
    const expected = { resolved: 25, time: 100 };
    const limited = timeLimit(fn, t);
    const output = await testLimited(limited, inputs);
    if (output.status === 'resolved') {
      expect(output.resolved).toBe(expected.resolved);
    }
    expect(output.time).toBeCloseTo(expected.time, -2);
  });

  test('Two Args Limit Not Exceeded', async () => {
    const fn = async (a: number, b: number): Promise<number> => {
      await new Promise((res) => setTimeout(res, 120));
      return a + b;
    };
    const inputs = [5, 10];
    const t = 150;
    const expected = { resolved: 15, time: 100 };
    const limited = timeLimit(fn, t);
    const output = await testLimited(limited, inputs);
    if (output.status === 'resolved') {
      expect(output.resolved).toBe(expected.resolved);
    }
    expect(output.time).toBeCloseTo(expected.time, -2);
  });

  test('Func With Error', async () => {
    const fn = (): never => {
      throw new Error('Error');
    };
    const t = 1000;
    const expected = { rejected: 'Error', time: 0 };
    const limited = timeLimit(fn, t);
    const output = await testLimited(limited, []);
    if (output.status === 'rejected') {
      expect(output.rejected).toBe(expected.rejected);
    }
    expect(output.time).toBeCloseTo(expected.time, -2);
  });
});

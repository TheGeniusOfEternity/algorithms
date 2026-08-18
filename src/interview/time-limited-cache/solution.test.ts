import { TimeLimitedCache } from './solution';

describe('Time Limited Cache | Interview | Testcases', () => {
  test('#1 Basic functionality', () => {
    vi.useFakeTimers();

    const cache = new TimeLimitedCache();

    expect(cache.set('user', 'Artem', 120)).toBe(false);
    expect(cache.get('user')).toBe('Artem');
    expect(cache.set('user', 'Bob', 120)).toBe(true);
    expect(cache.count()).toBe(1);

    vi.advanceTimersByTime(150);

    expect(cache.get('user')).toBe(-1);
    expect(cache.count()).toBe(0);

    vi.useRealTimers();
  });
});

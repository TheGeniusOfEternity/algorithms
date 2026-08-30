import { describe, it, expect, vi } from 'vitest';
import { fetchWithAutoRetry } from './solution';

describe('Fetch With Auto Retry | Interview | Testcases', () => {
  it('#1 Should resolve on the first successful attempt', async () => {
    const fetcher = vi.fn().mockResolvedValue('SUCCESS');

    const result = await fetchWithAutoRetry(fetcher, 2);

    expect(result).toBe('SUCCESS');
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('#2 Should retry after rejection and eventually resolve', async () => {
    const fetcher = vi
      .fn()
      .mockRejectedValueOnce(new Error('fail-1'))
      .mockRejectedValueOnce(new Error('fail-2'))
      .mockResolvedValueOnce('SUCCESS');

    const result = await fetchWithAutoRetry(fetcher, 2);

    expect(result).toBe('SUCCESS');
    expect(fetcher).toHaveBeenCalledTimes(3);
  });

  it('#3 Should make count + 1 attempts at most', async () => {
    const fetcher = vi.fn().mockRejectedValue(new Error('fail'));

    await expect(fetchWithAutoRetry(fetcher, 2)).rejects.toThrow('fail');

    expect(fetcher).toHaveBeenCalledTimes(3);
  });

  it('#4 Should reject with the last error if all attempts fail', async () => {
    const firstError = new Error('first');
    const secondError = new Error('second');
    const lastError = new Error('last');

    const fetcher = vi
      .fn()
      .mockRejectedValueOnce(firstError)
      .mockRejectedValueOnce(secondError)
      .mockRejectedValueOnce(lastError);

    await expect(fetchWithAutoRetry(fetcher, 2)).rejects.toBe(lastError);

    expect(fetcher).toHaveBeenCalledTimes(3);
  });

  it('#5 Should not retry after a successful attempt', async () => {
    const fetcher = vi
      .fn()
      .mockRejectedValueOnce(new Error('fail'))
      .mockResolvedValueOnce('SUCCESS')
      .mockResolvedValueOnce('SHOULD_NOT_BE_CALLED');

    const result = await fetchWithAutoRetry(fetcher, 5);

    expect(result).toBe('SUCCESS');
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it('#6 Should make only one attempt when count is 0', async () => {
    const fetcher = vi.fn().mockResolvedValue('SUCCESS');

    const result = await fetchWithAutoRetry(fetcher, 0);

    expect(result).toBe('SUCCESS');
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('#7 Should reject after one failed attempt when count is 0', async () => {
    const error = new Error('fail');
    const fetcher = vi.fn().mockRejectedValue(error);

    await expect(fetchWithAutoRetry(fetcher, 0)).rejects.toBe(error);

    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('#8 Should return the value from the successful retry', async () => {
    const fetcher = vi
      .fn()
      .mockRejectedValueOnce(new Error('fail'))
      .mockResolvedValueOnce({ status: 'ok', value: 42 });

    const result = await fetchWithAutoRetry(fetcher, 1);

    expect(result).toEqual({
      status: 'ok',
      value: 42,
    });

    expect(fetcher).toHaveBeenCalledTimes(2);
  });
});

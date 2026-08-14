import type { MockInstance } from 'vitest';

import { createSmartFetch } from './solution';

describe('Create Smart Fetch | Interview | TestCases', () => {
  let backendRequest: MockInstance<typeof console.log>;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(Math, 'random').mockReturnValue(0);
    backendRequest = vi
      .spyOn(console, 'log')
      .mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  test('#1 Waits for the whole batching window before calling batchFetch', async () => {
    const smartFetch = createSmartFetch(100);
    const response = smartFetch(1);

    await vi.advanceTimersByTimeAsync(99);
    expect(backendRequest).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1);
    expect(backendRequest).toHaveBeenCalledOnce();
    expect(backendRequest).toHaveBeenCalledWith('запрос к бэкенду', [1]);

    await vi.runOnlyPendingTimersAsync();
    await expect(response).resolves.toEqual({ id: 1, title: 1 });
  });

  test('#2 Merges calls from one window into one backend request', async () => {
    const smartFetch = createSmartFetch(100);
    const first = smartFetch(1);

    await vi.advanceTimersByTimeAsync(40);
    const second = smartFetch(2);
    await vi.advanceTimersByTimeAsync(60);

    expect(backendRequest).toHaveBeenCalledOnce();
    expect(backendRequest).toHaveBeenCalledWith('запрос к бэкенду', [1, 2]);

    await vi.runOnlyPendingTimersAsync();
    await expect(Promise.all([first, second])).resolves.toEqual([
      { id: 1, title: 1 },
      { id: 2, title: 2 },
    ]);
  });

  test('#3 Does not debounce the batching window', async () => {
    const smartFetch = createSmartFetch(100);
    const first = smartFetch(1);

    await vi.advanceTimersByTimeAsync(90);
    const second = smartFetch(2);
    await vi.advanceTimersByTimeAsync(10);

    expect(backendRequest).toHaveBeenCalledOnce();
    expect(backendRequest).toHaveBeenCalledWith('запрос к бэкенду', [1, 2]);

    await vi.runOnlyPendingTimersAsync();
    await expect(Promise.all([first, second])).resolves.toEqual([
      { id: 1, title: 1 },
      { id: 2, title: 2 },
    ]);
  });

  test('#4 Starts a new window while the previous batchFetch is pending', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(1);
    const smartFetch = createSmartFetch(100);
    const first = smartFetch(1);

    await vi.advanceTimersByTimeAsync(100);
    expect(backendRequest).toHaveBeenNthCalledWith(1, 'запрос к бэкенду', [1]);

    const second = smartFetch(2);
    await vi.advanceTimersByTimeAsync(100);

    expect(backendRequest).toHaveBeenCalledTimes(2);
    expect(backendRequest).toHaveBeenNthCalledWith(2, 'запрос к бэкенду', [2]);

    await vi.advanceTimersByTimeAsync(1000);
    await expect(Promise.all([first, second])).resolves.toEqual([
      { id: 1, title: 1 },
      { id: 2, title: 2 },
    ]);
  });

  test('#5 Keeps queues of different smartFetch instances isolated', async () => {
    const firstSmartFetch = createSmartFetch(100);
    const secondSmartFetch = createSmartFetch(100);
    const first = firstSmartFetch(1);
    const second = secondSmartFetch(2);

    await vi.advanceTimersByTimeAsync(100);

    expect(backendRequest.mock.calls).toEqual([
      ['запрос к бэкенду', [1]],
      ['запрос к бэкенду', [2]],
    ]);

    await vi.runOnlyPendingTimersAsync();
    await expect(Promise.all([first, second])).resolves.toEqual([
      { id: 1, title: 1 },
      { id: 2, title: 2 },
    ]);
  });
});

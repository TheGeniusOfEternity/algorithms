import { describe, it, expect, vi, beforeEach, afterEach, Mock } from 'vitest';
import { fetchUrlsWithCallback } from './solution';

describe('Fetch Urls With Callbacks | Interview | Testcases', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const createFetchUrlMock = (
    delays: Record<string, number>,
  ): Mock<(url: string) => Promise<unknown>> => {
    return vi.fn((url: string) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`result-${url}`);
        }, delays[url] || 0);
      });
    });
  };

  it('#1 Should call callback with results in original order after all requests complete', async () => {
    const urls = ['A', 'B', 'C'];
    const delays = { A: 150, B: 30, C: 80 };
    const fetchUrl = createFetchUrlMock(delays);
    const callback = vi.fn();

    fetchUrlsWithCallback(urls, fetchUrl, callback);

    expect(callback).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(30);
    expect(callback).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(50);
    expect(callback).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(70);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(['result-A', 'result-B', 'result-C']);
  });

  it('#2 Should handle empty urls array', () => {
    const fetchUrl = vi.fn();
    const callback = vi.fn();

    fetchUrlsWithCallback([], fetchUrl, callback);

    expect(fetchUrl).not.toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith([]);
  });

  it('#3 Should handle a single url', async () => {
    const urls = ['A'];
    const delays = { A: 50 };
    const fetchUrl = createFetchUrlMock(delays);
    const callback = vi.fn();

    fetchUrlsWithCallback(urls, fetchUrl, callback);

    await vi.advanceTimersByTimeAsync(50);
    expect(callback).toHaveBeenCalledWith(['result-A']);
  });

  it('#4 Should call callback exactly once even if some promises resolve early', async () => {
    const urls = ['A', 'B', 'C'];
    const delays = { A: 10, B: 100, C: 200 };
    const fetchUrl = createFetchUrlMock(delays);
    const callback = vi.fn();

    fetchUrlsWithCallback(urls, fetchUrl, callback);

    await vi.advanceTimersByTimeAsync(10);
    expect(callback).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(90);
    expect(callback).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(100);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(['result-A', 'result-B', 'result-C']);
  });

  it('#5 Should preserve order even if responses arrive in different order', async () => {
    const urls = ['X', 'Y', 'Z'];

    const delays = { X: 100, Y: 20, Z: 150 };
    const fetchUrl = createFetchUrlMock(delays);
    const callback = vi.fn();

    fetchUrlsWithCallback(urls, fetchUrl, callback);

    await vi.advanceTimersByTimeAsync(20);
    expect(callback).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(80);
    expect(callback).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(50);
    expect(callback).toHaveBeenCalledWith(['result-X', 'result-Y', 'result-Z']);
  });

  it('#6 Should work with zero delay', async () => {
    const urls = ['A', 'B'];
    const fetchUrl = createFetchUrlMock({ A: 0, B: 0 });
    const callback = vi.fn();

    fetchUrlsWithCallback(urls, fetchUrl, callback);

    await vi.advanceTimersByTimeAsync(0);
    expect(callback).toHaveBeenCalledWith(['result-A', 'result-B']);
  });

  it('#7 Should not call callback before all promises settle', async () => {
    const urls = ['A', 'B', 'C'];
    const delays = { A: 100, B: 100, C: 100 };
    const fetchUrl = createFetchUrlMock(delays);
    const callback = vi.fn();

    fetchUrlsWithCallback(urls, fetchUrl, callback);

    await vi.advanceTimersByTimeAsync(99);
    expect(callback).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

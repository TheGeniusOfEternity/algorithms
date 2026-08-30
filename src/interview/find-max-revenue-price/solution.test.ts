import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { findMaxRevenuePrice } from './solution';

interface Buyer {
  price: number;
  willBuy: () => Promise<boolean>;
}

const createBuyer = (
  price: number,
  willAgree: boolean,
  delay: number,
): Buyer => ({
  price,
  willBuy: vi.fn(
    () =>
      new Promise<boolean>((resolve) => {
        setTimeout(() => {
          resolve(willAgree);
        }, delay);
      }),
  ),
});

describe('Find Max Revenue Price | Interview | Testcases', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('#1 Should ask buyers in descending price order and return the first accepted price', async () => {
    const buyer100 = createBuyer(100, true, 10);
    const buyer300 = createBuyer(300, false, 50);
    const buyer250 = createBuyer(250, true, 30);
    const buyer180 = createBuyer(180, true, 10);

    const buyers = [buyer100, buyer300, buyer250, buyer180];

    const promise = findMaxRevenuePrice(buyers);

    expect(buyer300.willBuy).toHaveBeenCalledTimes(1);
    expect(buyer250.willBuy).not.toHaveBeenCalled();
    expect(buyer180.willBuy).not.toHaveBeenCalled();
    expect(buyer100.willBuy).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(50);

    expect(buyer250.willBuy).toHaveBeenCalledTimes(1);
    expect(buyer180.willBuy).not.toHaveBeenCalled();
    expect(buyer100.willBuy).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(30);

    await expect(promise).resolves.toBe(250);

    expect(buyer180.willBuy).not.toHaveBeenCalled();
    expect(buyer100.willBuy).not.toHaveBeenCalled();
  });

  it('#2 Should query buyers strictly sequentially', async () => {
    const buyer300 = createBuyer(300, false, 100);
    const buyer200 = createBuyer(200, false, 100);
    const buyer100 = createBuyer(100, true, 100);

    const promise = findMaxRevenuePrice([buyer100, buyer300, buyer200]);

    expect(buyer300.willBuy).toHaveBeenCalledTimes(1);
    expect(buyer200.willBuy).not.toHaveBeenCalled();
    expect(buyer100.willBuy).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(99);

    expect(buyer200.willBuy).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1);

    expect(buyer200.willBuy).toHaveBeenCalledTimes(1);
    expect(buyer100.willBuy).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(100);

    expect(buyer100.willBuy).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(100);

    await expect(promise).resolves.toBe(100);
  });

  it('#3 Should stop immediately after the first buyer agrees', async () => {
    const buyer300 = createBuyer(300, true, 50);
    const buyer200 = createBuyer(200, true, 10);
    const buyer100 = createBuyer(100, true, 10);

    const promise = findMaxRevenuePrice([buyer100, buyer200, buyer300]);

    await vi.advanceTimersByTimeAsync(50);

    await expect(promise).resolves.toBe(300);

    expect(buyer300.willBuy).toHaveBeenCalledTimes(1);
    expect(buyer200.willBuy).not.toHaveBeenCalled();
    expect(buyer100.willBuy).not.toHaveBeenCalled();
  });

  it('#4 Should return null if all buyers reject', async () => {
    const buyer300 = createBuyer(300, false, 10);
    const buyer200 = createBuyer(200, false, 10);
    const buyer100 = createBuyer(100, false, 10);

    const promise = findMaxRevenuePrice([buyer100, buyer300, buyer200]);

    await vi.runAllTimersAsync();

    await expect(promise).resolves.toBeNull();

    expect(buyer300.willBuy).toHaveBeenCalledTimes(1);
    expect(buyer200.willBuy).toHaveBeenCalledTimes(1);
    expect(buyer100.willBuy).toHaveBeenCalledTimes(1);
  });

  it('#5 Should return null for an empty buyers array', async () => {
    await expect(findMaxRevenuePrice([])).resolves.toBeNull();
  });

  it('#6 Should not mutate the original buyers array', async () => {
    const buyer100 = createBuyer(100, false, 10);
    const buyer300 = createBuyer(300, false, 10);
    const buyer200 = createBuyer(200, true, 10);

    const buyers = [buyer100, buyer300, buyer200];
    const originalOrder = [...buyers];

    const promise = findMaxRevenuePrice(buyers);

    await vi.runAllTimersAsync();
    await promise;

    expect(buyers).toEqual(originalOrder);
    expect(buyers[0]).toBe(buyer100);
    expect(buyers[1]).toBe(buyer300);
    expect(buyers[2]).toBe(buyer200);
  });

  it('#7 Should handle a single buyer who agrees', async () => {
    const buyer = createBuyer(150, true, 20);

    const promise = findMaxRevenuePrice([buyer]);

    await vi.advanceTimersByTimeAsync(20);

    await expect(promise).resolves.toBe(150);
    expect(buyer.willBuy).toHaveBeenCalledTimes(1);
  });

  it('#8 Should handle a single buyer who rejects', async () => {
    const buyer = createBuyer(150, false, 20);

    const promise = findMaxRevenuePrice([buyer]);

    await vi.advanceTimersByTimeAsync(20);

    await expect(promise).resolves.toBeNull();
    expect(buyer.willBuy).toHaveBeenCalledTimes(1);
  });
});

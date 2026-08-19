import { renderItems } from './solution';
import { createAsyncGetter, Item } from '../common';

describe('Render Items: No Async | Interview | Testcases', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('#1 Should render items in order and then finished', async () => {
    const items = [
      {
        id: 1,
        title: 'One',
        getData: createAsyncGetter({ id: 1, text: 'A' }, 200),
      },
      {
        id: 2,
        title: 'Two',
        getData: createAsyncGetter({ id: 2, text: 'B' }, 50),
      },
      {
        id: 3,
        title: 'Three',
        getData: createAsyncGetter({ id: 3, text: 'C' }, 100),
      },
    ];

    const order: (number | string)[] = [];

    const promise = renderItems(items, (item) => {
      if (typeof item === 'object' && 'type' in item) {
        order.push('finished');
      } else {
        order.push((item as { id: number }).id);
      }
    });

    vi.advanceTimersByTime(200);
    await promise;

    expect(order).toEqual([1, 2, 3, 'finished']);
  });

  test('#2 Should handle empty items array', async () => {
    const items: Item[] = [];
    const order: (number | string)[] = [];

    const promise = renderItems(items, (item) => {
      if (typeof item === 'object' && 'type' in item) {
        order.push('finished');
      } else {
        order.push((item as { id: number }).id);
      }
    });

    await promise;
    expect(order).toEqual(['finished']);
  });

  test('#3 Should render single item and then finished', async () => {
    const items = [
      {
        id: 42,
        title: 'Answer',
        getData: createAsyncGetter({ id: 42, text: 'Life' }, 100),
      },
    ];

    const order: (number | string)[] = [];

    const promise = renderItems(items, (item) => {
      if (typeof item === 'object' && 'type' in item) {
        order.push('finished');
      } else {
        order.push((item as { id: number }).id);
      }
    });

    vi.advanceTimersByTime(100);
    await promise;

    expect(order).toEqual([42, 'finished']);
  });

  test('#4 Should resolve only after the longest delay (parallel execution)', async () => {
    const items = [
      {
        id: 1,
        title: 'One',
        getData: createAsyncGetter({ id: 1, text: 'A' }, 200),
      },
      {
        id: 2,
        title: 'Two',
        getData: createAsyncGetter({ id: 2, text: 'B' }, 50),
      },
    ];

    let resolved = false;
    const promise = renderItems(items, () => {
      /* empty */
    }).then(() => {
      resolved = true;
    });

    vi.advanceTimersByTime(50);
    await Promise.resolve();
    expect(resolved).toBe(false);

    vi.advanceTimersByTime(150);
    await promise;
    expect(resolved).toBe(true);
  });
});

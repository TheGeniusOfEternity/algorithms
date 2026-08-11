import { TimeMap } from './solution';

describe('Time Based Key Value Store | NeetCode | RoadMap | Testcases', () => {
  test('#1 Returns a value at its exact timestamp', () => {
    const timeMap = new TimeMap();

    timeMap.set('foo', 'bar', 1);

    expect(timeMap.get('foo', 1)).toBe('bar');
  });

  test('#2 Returns the latest value before the requested timestamp', () => {
    const timeMap = new TimeMap();

    timeMap.set('foo', 'bar', 1);
    timeMap.set('foo', 'bar2', 4);

    expect(timeMap.get('foo', 3)).toBe('bar');
    expect(timeMap.get('foo', 5)).toBe('bar2');
  });

  test('#3 Returns an empty string when no earlier value exists', () => {
    const timeMap = new TimeMap();

    timeMap.set('foo', 'bar', 2);

    expect(timeMap.get('foo', 1)).toBe('');
    expect(timeMap.get('unknown', 10)).toBe('');
  });

  test('#4 Finds exact and in-between values in a longer history', () => {
    const timeMap = new TimeMap();

    timeMap.set('status', 'created', 1);
    timeMap.set('status', 'processing', 5);
    timeMap.set('status', 'completed', 10);

    expect(timeMap.get('status', 5)).toBe('processing');
    expect(timeMap.get('status', 9)).toBe('processing');
    expect(timeMap.get('status', 10)).toBe('completed');
  });

  test('#5 Keeps histories for different keys independent', () => {
    const timeMap = new TimeMap();

    timeMap.set('foo', 'first foo', 1);
    timeMap.set('bar', 'first bar', 2);
    timeMap.set('foo', 'second foo', 3);

    expect(timeMap.get('foo', 2)).toBe('first foo');
    expect(timeMap.get('bar', 3)).toBe('first bar');
    expect(timeMap.get('foo', 3)).toBe('second foo');
  });
});

export type Fn = (...params: number[]) => number;

/**
 *
 * @param fn - function to memoized
 *
 * @returns memoized fn - function will be called with unique arg only single time, then result value from cached will be returned
 */
export const memoize = (fn: Fn): Fn => {
  const cache = new Map<string, number>();

  return (...params: number[]): number => {
    const key = JSON.stringify(params);
    const cached = cache.get(key);

    if (cached !== undefined) {
      return cached;
    }

    const value = fn(...params);
    cache.set(key, value);

    return value;
  };
};

/**
 * Create a cache structure, that stores data inside only for provided duration
 */
export class TimeLimitedCache {
  private readonly cache = new Map<
    string,
    { value: string; timer: NodeJS.Timeout }
  >();

  /**
   *
   * @param key - key of element
   * @returns value, stored in cache by key `key`. If there is no such element, `-1` is returned
   */
  get(key: string): string | -1 {
    const el = this.cache.get(key);
    return el?.value ?? -1;
  }

  /**
   * Store provided `value` by `key` in cache for `duration` milliseconds.
   * @param key - key to store new data in cache
   * @param value - value of data that will be stored
   * @param duration - amount of time (in `ms`) that data will exist in cache.
   */
  set(key: string, value: string, duration: number): boolean {
    const isReassigned = this.cache.has(key);
    const timer = setTimeout(() => {
      this.delete(key);
    }, duration);
    this.cache.set(key, { value, timer });

    return isReassigned;
  }

  /**
   * Removes the element from the cache
   * @param key - key of the element
   * @private
   */
  private delete(key: string): void {
    const el = this.cache.get(key);
    if (el) {
      clearTimeout(el.timer);
      this.cache.delete(key);
    }
  }

  /**
   * @returns size of the cache
   */
  count(): number {
    return this.cache.size;
  }
}

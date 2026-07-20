/**
 * A key-value cache where each key has a time-to-live (TTL) duration.
 * Once the duration elapses, the key is automatically removed.
 */
export class TimeLimitedCache {
  /**
   * Internal storage for keys.
   * Each entry stores the value, the TTL duration, and the timeout handle.
   */
  private readonly cache = new Map<
    number,
    {
      value: number;
      duration: number;
      clearId: NodeJS.Timeout;
    }
  >();

  /**
   * Sets a key-value pair with a specified TTL duration.
   * If the key already exists and is still valid, its value and duration are overwritten,
   * the old timeout is cleared, and `true` is returned.
   * If the key does not exist (or has expired), a new entry is created and `false` is returned.
   *
   * @param key - The integer key.
   * @param value - The integer value to store.
   * @param duration - The time-to-live in milliseconds.
   * @returns `true` if an un-expired key already existed; `false` otherwise.
   */
  set(key: number, value: number, duration: number): boolean {
    const cached = this.cache.get(key);
    const wasSet = Boolean(cached);
    const clearId = setTimeout(() => this.cache.delete(key), duration);

    this.cache.set(key, { value, duration, clearId });
    if (cached !== undefined) {
      clearTimeout(cached.clearId);
    }

    return wasSet;
  }

  /**
   * Retrieves the value associated with the given key.
   * If the key does not exist or has expired, returns `-1`.
   *
   * @param key - The integer key to look up.
   * @returns The stored value if the key is present and un-expired; otherwise `-1`.
   */
  get(key: number): number {
    const entry = this.cache.get(key);
    return entry?.value ?? -1;
  }

  /**
   * Returns the total number of currently un-expired keys in the cache.
   *
   * @returns The count of active (non-expired) keys.
   */
  count(): number {
    return this.cache.size;
  }
}

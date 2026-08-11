export class TimeMap {
  keyStore: Map<string, { value: string; timestamp: number }[]>;

  constructor() {
    this.keyStore = new Map();
  }

  /**
   * Stores the key `key` with the value `value` at the given time `timestamp`.
   *
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key: string, value: string, timestamp: number): void {
    const values = this.keyStore.get(key) ?? [];
    values.push({ value, timestamp });
    this.keyStore.set(key, values);
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string} - a value such that `set` was called previously, with `timestamp_prev <= timestamp`.
   * If there are multiple such values, it returns the value associated with the largest `timestamp_prev`.
   * If there are no values, it returns `""`.
   */
  get(key: string, timestamp: number): string {
    let res = '';
    const values = this.keyStore.get(key);
    if (values) {
      let start = 0;
      let end = values.length;
      while (start < end) {
        const m = start + Math.floor((end - start) / 2);
        if (timestamp < values[m].timestamp) {
          end = m;
        } else {
          res = values[m].value;
          if (timestamp > values[m].timestamp) {
            start = m + 1;
          } else {
            break;
          }
        }
      }
    }
    return res;
  }
}

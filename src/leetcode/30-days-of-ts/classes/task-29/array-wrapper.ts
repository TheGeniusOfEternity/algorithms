/**
 * Wrap array to access specific features
 *
 * Allow to add arrays as sum of their elements
 */
export class ArrayWrapper {
  arr;

  /**
   * @param nums initial value
   */
  constructor(nums: number[]) {
    this.arr = [...nums];
  }

  /**
   * function helper to convert instance before adding
   */
  valueOf(): number {
    return this.arr.reduce((acc, curr) => curr + acc, 0);
  }

  /**
   * String representation
   */
  toString(): string {
    return `[${this.arr.join(',')}]`;
  }
}

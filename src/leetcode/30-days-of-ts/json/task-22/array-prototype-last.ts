export {};

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

/**
 * @returns The last element of the array. If there are no elements in the array, it `-1` will be returned.
 */
Array.prototype.last = function (): unknown {
  const length = this.length;
  return length === 0 ? -1 : this[length - 1];
};

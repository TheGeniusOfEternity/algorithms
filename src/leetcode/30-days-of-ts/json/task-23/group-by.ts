export {};

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

/**
 *
 * @param fn - grouping function
 *
 * @returns an object where each key is the output of `fn(arr[i])`
 * and each value is an array containing all items in the original array which generate that key.
 */
Array.prototype.groupBy = function <T>(fn: (item: T) => string): Record<string, T[]> {
  const obj: Record<string, T[]> = {};
  this.forEach((el: T) => {
    const result = fn(el);
    obj[result] ??= [];
    obj[result].push(el);
  });
  return obj;
};

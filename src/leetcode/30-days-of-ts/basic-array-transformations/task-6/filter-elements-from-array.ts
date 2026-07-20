/**
 *
 * @param arr - array of elements
 * @param fn - comparing function
 *
 * @returns new array that contains the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value (Boolean(value) returns true)
 */
export const filter = (arr: number[], fn: (n: number, i: number) => unknown): number[] => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(fn(arr[i], i))) {
      result.push(arr[i]);
    }
  }
  return result;
};

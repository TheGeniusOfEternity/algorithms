/**
 *
 * @param arr - array with number
 * @param fn - provided function
 *
 * @returns copy of arr, where to element fn was applied
 */
export const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

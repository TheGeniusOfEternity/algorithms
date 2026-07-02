// Iterative solution

/**
 *
 * @param arr - array of numbers
 *
 * @returns sum of elements
 */
export const arraySumIterative = (arr: number[]): number => {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Recursive solution

/**
 *
 * @param arr - array of numbers
 *
 * @returns sum of elements
 */
export const arraySumRecursive = (arr: number[]): number => {
  return arr.length === 0
    ? 0
    : arr[0] + arraySumRecursive(arr.slice(1));
}
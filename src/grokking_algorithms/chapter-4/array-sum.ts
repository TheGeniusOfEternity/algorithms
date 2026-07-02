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
export const arraySumRecursive = (arr: number[], start: number = 0): number => {
  return start === arr.length
    ? 0
    : arr[start] + arraySumRecursive(arr, start + 1);
}
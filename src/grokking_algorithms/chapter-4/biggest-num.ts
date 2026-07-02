// Iterative solution

/**
 *
 * @param arr - list of numbers
 *
 * @returns biggest number
 */
export const biggestNumIterative = (arr: number[]): number => {
  let biggest = -Infinity;
  for (const num of arr) {
    biggest = Math.max(biggest, num)
  }
  return biggest;
}

// Recursive solution

/**
 *
 * @param arr - list of numbers
 *
 * @returns biggest number
 */
export const biggestNumRecursive = (arr: number[]): number => {
  if (arr.length === 2) return Math.max(arr[0], arr[1]);
  const sub_biggest = biggestNumRecursive(arr.slice(1));
  return Math.max(arr[0], sub_biggest)
}
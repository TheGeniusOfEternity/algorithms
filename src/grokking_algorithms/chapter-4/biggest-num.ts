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
export const biggestNumRecursive = (arr: number[]): number | null => {
  if (arr.length === 0) return null;

  const maxRecursive = (start: number): number => {
    if (start === arr.length - 1) return arr[start];
    return Math.max(arr[start], maxRecursive(start + 1));
  };

  return maxRecursive(0);
}
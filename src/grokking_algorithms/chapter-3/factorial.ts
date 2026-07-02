// Iterative solution

/**
 *
 * @param n - integer value
 *
 * @returns factorial of n
 */
export const factorialIterative = (n: number): number => {
  let res = 1;
  while (n > 1) {
    res *= n;
    n--;
  }
  return res;
}


// Recursive solution

/**
 *
 * @param n - integer value
 *
 * @returns factorial of n
 */
export const factorialRecursive = (n: number): number => {
  return n === 1
    ? n
    : n * factorialRecursive(n - 1);
}
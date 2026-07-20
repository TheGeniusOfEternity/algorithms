// Iterative solution

/**
 *
 * @param a - length of the rectangle
 * @param b - width of the rectangle
 *
 * @returns max length of the square for splitting the rectangle
 */
export const euclidAlgorithmIterative = (a: number, b: number): number => {
  let c = a;
  let d = b;
  let rest = c % d;
  while (rest > 0) {
    c = d;
    d = rest;
    rest = c % d;
  }
  return d;
};

// Recursive solution

/**
 *
 * @param a - length of the rectangle
 * @param b - width of the rectangle
 *
 * @returns max length of the square for splitting the rectangle
 */
export const euclidAlgorithmRecursive = (a: number, b: number): number => {
  const rest = a % b;
  return rest === 0 ? b : euclidAlgorithmRecursive(b, rest);
};

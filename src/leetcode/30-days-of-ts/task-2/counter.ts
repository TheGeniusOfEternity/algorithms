/**
 *
 * @param n - start number that would be returned inside returned function and then will be incremented
 *
 * @returns arrow function that returns current value of n and then increments it by 1
 */
export const createCounter = (n: number): () => number => {
  return () => n++;
}
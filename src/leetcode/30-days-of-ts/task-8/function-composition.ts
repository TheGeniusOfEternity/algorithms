export type F = (x: number) => number

/**
 *
 * @param functions - array of functions
 *
 * @returns function - composition of functions
 */
export const compose = (functions: F[]): F => {
  let currFn = (x: number) => x;
  while (functions.length > 0) {
    const nextFn = functions.pop();
    const prevFn = currFn;
    if (nextFn) currFn = (x: number) => nextFn(prevFn(x));
  }
  return currFn;
}
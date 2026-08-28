/**
 *
 * @param a - positive integer
 * @param b - positive integer
 * @returns `true` if `a` contains of the same amount of digits (except `0`) as `b`
 *
 *`false` otherwise
 *
 * @example
 * console.log(digitPermutation(10023, 321)); // true
 * console.log(digitPermutation(112, 12)); // false
 * console.log(digitPermutation(1000, 1)); // true
 */
export const digitPermutation = (a: number, b: number): boolean => {
  const count = new Array<number>(10).fill(0);

  for (const d of a.toString()) {
    count[Number(d)]++;
  }

  for (const d of b.toString()) {
    count[Number(d)]--;
  }

  for (let i = 1; i < 10; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }

  return true;
};

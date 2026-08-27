/**
 * Groups nums by multiset of digits (except zero)
 * @param numbers - array of positive integers
 * @returns array of groups
 *
 * @example
 *
 * 123   -> 123
 * 1032  -> 123
 * 99    -> 99
 * 90009 -> 99
 *
 * const numbers = [99, 123, 90009, 1032, 45, 54];
 * const snapshot = [...numbers];
 *
 * console.log(groupNumbersByDigits(numbers));
 * // Expected:
 * // [
 * //   [99, 90009],
 * //   [123, 1032],
 * //   [45, 54]
 * // ]
 *
 * console.log(numbers);
 * Must be unchanged [99, 123, 90009, 1032, 45, 54]
 */
export const groupNumbers = (numbers: number[]): number[][] => {
  const result: number[][] = [];
  const groups = new Map<string, number[]>();
  for (const num of numbers) {
    const count = new Array<number>(10).fill(0);
    for (const d of num.toString()) {
      if (d !== '0') {
        count[Number(d)]++;
      }
    }
    const key = count.join(',');
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)?.push(num);
  }

  for (const [, group] of groups) {
    result.push(group);
  }

  return result;
};

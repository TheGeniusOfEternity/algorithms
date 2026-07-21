type MultiDimensionalArray = (number | MultiDimensionalArray)[];

/**
 *
 * @param arr - source array
 * @param n - depth of flattening
 *
 * @returns array flattened by specified depth `n`
 */
export const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
  const result: MultiDimensionalArray = [];
  const dfs = (subArr: MultiDimensionalArray, depth: number): void => {
    for (const el of subArr) {
      if (Array.isArray(el) && depth < n) {
        dfs(el, depth + 1);
      } else {
        result.push(el);
      }
    }
  };
  dfs(arr, 0);
  return result;
};

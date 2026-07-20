export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

/**
 *
 * @param arr - source array
 * @param size - chunk size
 *
 * @retuns chunked array contains the original elements in `arr`, but consists of subarrays each of length `size`.
 * The length of the last subarray may be less than `size` if `arr.length` is not evenly divisible by `size`.
 */
export const chunk = (arr: JSONValue[], size: number): JSONValue[][] => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

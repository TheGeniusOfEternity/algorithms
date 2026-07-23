/**
 * @param nums - integer array
 * @param k - integer, size of top
 *
 * @returns the `k` most frequent elements within the array.
 */
export const topKFrequent = (nums: number[], k: number): number[] => {
  const entries: Record<number, number | undefined> = {};
  const freqs = Array.from({ length: nums.length + 1 }, (): number[] => []);
  nums.forEach((num) => {
    entries[num] = (entries[num] ?? 0) + 1;
  });
  for (const num in entries) {
    const count = entries[num];
    if (count !== undefined) {
      freqs[count].push(Number(num));
    }
  }
  const result: number[] = [];
  for (let i = freqs.length - 1; i >= 0; i--) {
    for (const num of freqs[i]) {
      if (result.length === k) {
        return result;
      }
      result.push(num);
    }
  }
  return result;
};

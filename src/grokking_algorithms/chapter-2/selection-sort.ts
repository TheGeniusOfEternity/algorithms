/**
 *
 * @param arr unsorted array
 *
 * @returns sorted array
 */
export const selectionSort = (arr: number[]): number[] => {
  const unsorted = [...arr];
  const sorted: number[] = [];
  while (unsorted.length > 0) {
    let smallest = Infinity;
    let idx = -1;
    for (let i = 0; i < unsorted.length; i++) {
      const num = unsorted[i]
      if (smallest > num) {
        idx = i;
        smallest = num
      }
    }
    sorted.push(unsorted.splice(idx, 1)[0]);
  }
  return sorted;
}

// Recursive implementation

/**
 *
 * @param arr - list of numbers
 *
 * @returns sorted array
 */
export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const pivotIndex = Math.round(Math.random() * (arr.length - 1));
  const pivot = arr[pivotIndex]
  const left = arr.filter(el => el < pivot);
  const middle = arr.filter(el => el === pivot)
  const right = arr.filter(el => el > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}
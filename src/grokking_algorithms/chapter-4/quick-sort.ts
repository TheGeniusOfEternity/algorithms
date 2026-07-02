// Recursive implementation

/**
 *
 * @param arr - list of numbers
 *
 * @returns sorted array
 */
export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const pivot = arr[Math.round(Math.random() * arr.length)];
  const left = arr.filter(el => el < pivot);
  const right = arr.filter(el => el > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
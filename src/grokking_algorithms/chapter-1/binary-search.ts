// Binary Search

// Recursive implementation

/**
 *
 * @param nums sorted array for search
 * @param target searching element
 *
 * @returns index of a searching element, null if element is not present
 */
const solution= (nums: number[], target: number) => {
  let iterations = 0;
  const search = (start: number, end: number): number | null => {
    iterations++
    const index = Math.floor((start + end) / 2);
    const num = nums[index]
    if (num === target) return index;
    if (start === end) return null;
    return num > target
      ? search(start, index - 1) as number | null
      : search(index + 1, end) as number | null
  }
  return [search(0, nums.length - 1), iterations];
}
const data: number[] = []
for (let i = 0; i < 2; i++) data.push(i)
console.log(solution([0, 1], 1))
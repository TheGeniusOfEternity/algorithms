// Binary Search

// Iterative implementation

/**
 *
 * @param nums sorted array for search
 * @param target searching element
 *
 * @returns index of a searching element, null if the element is not present
 */
export const solution_iterative = (nums: number[], target: number) => {
  let start = 0;
  let end = nums.length;
  let iterations = 0;

  while (start <= end) {
    iterations++;
    const index = Math.floor((start + end) / 2);
    const num = nums[index];
    if (num === target) return [index, iterations];
    if (target < num) end = index - 1;
    else start = index + 1;
  }

  return [null, iterations];
}

// Recursive implementation

/**
 *
 * @param nums sorted array for search
 * @param target searching element
 *
 * @returns index of a searching element, null if the element is not present
 */
export const solution_recursive= (nums: number[], target: number) => {
  let iterations = 0;
  const search = (start: number, end: number): number | null => {
    iterations++
    const index = Math.floor((start + end) / 2);
    const num = nums[index];
    if (num === target) return index;
    if (start === end) return null;
    return num > target
      ? search(start, index - 1) as number | null
      : search(index + 1, end) as number | null
  }
  return [search(0, nums.length - 1), iterations];
}


// Check
const data: number[] = [];
for (let i = 0; i < 4; i++) data.push(i);

console.log(solution_iterative(data, -1));
console.log(solution_recursive(data, -1));
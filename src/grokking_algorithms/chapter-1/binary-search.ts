// Binary Search

// Iterative implementation

/**
 *
 * @param nums sorted array for search
 * @param target searching element
 *
 * @returns [idx, iter] pair:
 *
 * idx - index of a searching element, null if the element is not present
 *
 * iter - iterations required to find the element
 */
export const binarySearchIterative = (nums: number[], target: number): (number | null)[] => {
  let start = 0;
  let end = nums.length;
  let iterations = 0;

  while (start <= end) {
    iterations++;
    const index = Math.floor((start + end) / 2);
    const num = nums[index];
    if (num === target) {
      return [index, iterations];
    }
    if (target < num) {
      end = index - 1;
    } else {
      start = index + 1;
    }
  }

  return [null, iterations];
};

// Recursive implementation

/**
 *
 * @param nums sorted array for search
 * @param target searching element
 *
 * @returns [idx, iter] pair:
 *
 * idx - index of a searching element, null if the element is not present
 *
 * iter - iterations required to find the element
 */
export const binarySearchRecursive = (nums: number[], target: number): (number | null)[] => {
  let iterations = 0;
  const search = (start: number, end: number): number | null => {
    iterations++;
    const index = Math.floor((start + end) / 2);
    const num = nums[index];
    if (num === target) {
      return index;
    }
    if (start === end) {
      return null;
    }
    return num > target ? search(start, index - 1) : search(index + 1, end);
  };
  return [search(0, nums.length - 1), iterations];
};

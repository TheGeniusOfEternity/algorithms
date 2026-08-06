/**
 * @param {number[]} heights - an array of integers where `heights[i]` represents the height of a bar.
 * The width of each bar is `1`.
 * @return {number} the area of the largest rectangle that can be formed among the bars.
 */
export const largestRectangleArea = (heights: number[]): number => {
  const stack: number[][] = [];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let startIdx: number | undefined;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const bar = stack.pop();
      if (bar) {
        startIdx = bar[0];
        maxArea = Math.max(maxArea, bar[1] * (i - bar[0]));
      }
    }
    stack.push([startIdx ?? i, heights[i]]);
  }

  for (const [idx, height] of stack) {
    maxArea = Math.max(maxArea, height * (heights.length - idx));
  }

  return maxArea;
};

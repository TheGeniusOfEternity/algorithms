import { productExceptSelf } from './solution';

describe('Product of Array Except Self | NeetCode RoadMap | Testcases', () => {
  test('#1 Non-zero elements', () => {
    const nums = [1, 2, 4, 6];
    const output = productExceptSelf(nums);
    const expected = [48, 24, 12, 8];
    expect(output).toEqual(expected);
  });

  test('#2 With zero elements', () => {
    const nums = [-1, 0, 1, 2, 3];
    const output = productExceptSelf(nums);
    const expected = [0, -6, 0, 0, 0];
    expect(output).toEqual(expected);
  });
});

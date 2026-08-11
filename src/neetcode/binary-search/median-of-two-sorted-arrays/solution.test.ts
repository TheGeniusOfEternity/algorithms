import { findMedianSortedArrays } from './solution';

describe('Median Of Two Sorted Arrays | NeetCode | RoadMap | Testcases', () => {
  test('#1 Odd median', () => {
    const nums1 = [1, 2];
    const nums2 = [3];
    const output = findMedianSortedArrays(nums1, nums2);
    expect(output).toBe(2.0);
  });

  test('#2 Even median', () => {
    const nums1 = [1, 3];
    const nums2 = [2, 4];
    const output = findMedianSortedArrays(nums1, nums2);
    expect(output).toBe(2.5);
  });
});

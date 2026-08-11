export const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  let A = nums1;
  let B = nums2;
  if (A.length > B.length) {
    [A, B] = [B, A];
  }

  let l = 0;
  let r = A.length - 1;
  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);

  for (;;) {
    const i = l + Math.floor((r - l) / 2);
    const j = half - i - 2;

    const aLeft = i >= 0 ? A[i] : -Infinity;
    const aRight = i + 1 < A.length ? A[i + 1] : Infinity;
    const bLeft = j >= 0 ? B[j] : -Infinity;
    const bRight = j + 1 < B.length ? B[j + 1] : Infinity;

    if (aLeft <= bRight && bLeft <= aRight) {
      if (total % 2 === 1) {
        return Math.min(aRight, bRight);
      } else {
        return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
      }
    } else if (aLeft > bRight) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
};

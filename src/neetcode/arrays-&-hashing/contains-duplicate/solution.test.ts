import { hasDuplicate } from './solution';

describe('Contains Duplicate | NeetCode RoadMap | Testcases', () => {
  test('#1 Duplicates', () => {
    expect(hasDuplicate([1, 2, 3, 3])).toBe(true);
  });

  test('#2 No Duplicates', () => {
    expect(hasDuplicate([1, 2, 3, 4])).toBe(false);
  });
});

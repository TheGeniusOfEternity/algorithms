import { isPalindrome } from './solution';

describe('Valid Palindrome | NeetCode RoadMap | Testcases', () => {
  test('#1 Valid string', () => {
    const s = 'Was it a car or a cat I saw?';
    expect(isPalindrome(s)).toBe(true);
  });

  test('#2 Invalid string', () => {
    const s = 'tab a cat';
    expect(isPalindrome(s)).toBe(false);
  });
});

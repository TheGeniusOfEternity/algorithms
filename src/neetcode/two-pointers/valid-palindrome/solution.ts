/**
 * @param {string} s - input string
 * @return {boolean} `true` if `s` is a palindrome, false otherwise
 */
export const isPalindrome = (s: string): boolean => {
  const isAlphaNumeric = (char: string): boolean =>
    (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');

  let right = s.length - 1;
  let left = 0;
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

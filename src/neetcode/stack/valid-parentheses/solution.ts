export const isValid = (s: string): boolean => {
  const dict: Record<string, string | undefined> = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack: string[] = [];

  for (const ch of s) {
    if (dict[ch] !== undefined) {
      stack.push(ch);
    } else {
      const last = stack.pop();
      if (last === undefined || dict[last] !== ch) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

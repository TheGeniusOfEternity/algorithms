type Operators = '+' | '-' | '*' | '/';
/**
 * @param {string[]} tokens
 * @return {number}
 */
export const evalRPN = (tokens: string[]): number => {
  const stack: number[] = [];
  const operators: Record<string, Operators | undefined> = {
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
  };

  for (const t of tokens) {
    const op = operators[t];
    if (op !== undefined) {
      const b = stack.pop();
      const a = stack.pop();
      if (a !== undefined && b !== undefined) {
        switch (op) {
          case '+': {
            stack.push(a + b);
            break;
          }
          case '-': {
            stack.push(a - b);
            break;
          }
          case '*': {
            stack.push(a * b);
            break;
          }
          case '/': {
            stack.push(Math.trunc(a / b));
            break;
          }
        }
      }
    } else {
      stack.push(Number(t));
    }
  }

  return stack.pop() ?? -1;
};

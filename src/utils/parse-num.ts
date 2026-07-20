/**
 * Parses number from input string
 *
 * @param idx pointer in provided input string
 * @param input string of text
 *
 * @retuns nearest signed number
 */
export const parseNum = (idx: { val: number }, input: string): number => {
  const len = input.length;
  let i = idx.val;
  while (i < len && (input[i] === ' ' || input[i] === '\n' || input[i] === '\r')) {
    i++;
  }
  let sign = 1;
  if (input[i] === '-') {
    sign = -1;
    i++;
  }
  let num = 0;
  while (i < len && input[i] >= '0' && input[i] <= '9') {
    num = num * 10 + (input.charCodeAt(i) - 48);
    i++;
  }
  idx.val = i;
  return num * sign;
};

/**
 * Parses bigint from input string
 *
 * @param idx pointer in provided input string
 * @param input string of text
 *
 * @retuns nearest signed bigint
 */
export const parseBigInt = (idx: { val: number }, input: string): bigint => {
  const len = input.length;
  let i = idx.val;
  while (i < len && (input[i] === ' ' || input[i] === '\n' || input[i] === '\r')) i++;
  let sign = 1n;
  if (input[i] === '-') { sign = -1n; i++; }
  let num = 0n;
  while (i < len && input[i] >= '0' && input[i] <= '9') {
    num = num * 10n + BigInt(input.charCodeAt(i) - 48);
    i++;
  }
  idx.val = i;
  return num * sign;
};
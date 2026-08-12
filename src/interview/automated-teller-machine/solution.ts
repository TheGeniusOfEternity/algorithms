/**
 * @param sum - requested amount of money
 * @param limits - amount of each nominal
 *
 * @return `banknotes` object of `limits` structure, that contains amount of each banknote atm should give:
 * - if possible, prefer larger nominals
 * - if impossible to give value in available nominals, return Error: Incorrect value
 * - if there are not enough banknote to give, return Error: Not enough money
 *
 * Note that `limits` must be mutated after `the` sum was given
 */
export const atm = (
  sum: number,
  limits: Record<number, number>,
): Record<number, number> | string => {
  const result: Record<number, number> = {};
  const nominals = [5000, 1000, 500, 100, 50];
  const tempLimits = { ...limits };
  if (sum < 0 || sum % 50 !== 0) {
    return 'Error: Incorrect value';
  }
  for (const nominal of nominals) {
    const availableCount = Math.min(
      Math.floor(sum / nominal),
      tempLimits[nominal],
    );
    result[nominal] = availableCount;
    tempLimits[nominal] -= availableCount;
    sum -= availableCount * nominal;
  }

  if (sum > 0) {
    return 'Error: Not enough money';
  }

  Object.assign(limits, tempLimits);

  return result;
};

import { atm } from './solution';

const createLimits = (
  overrides: Partial<Record<50 | 100 | 500 | 1000 | 5000, number>> = {},
): Record<number, number> => ({
  50: 10,
  100: 10,
  500: 10,
  1000: 10,
  5000: 10,
  ...overrides,
});

describe('Automated Teller Machine | Interview | TestCases', () => {
  test('#1 Prefers larger banknotes', () => {
    const limits = createLimits();

    expect(atm(6650, limits)).toEqual({
      50: 1,
      100: 1,
      500: 1,
      1000: 1,
      5000: 1,
    });
  });

  test('#2 Uses smaller banknotes when larger ones are unavailable', () => {
    const limits = createLimits({ 5000: 0, 1000: 2, 500: 3 });

    expect(atm(3500, limits)).toEqual({
      50: 0,
      100: 0,
      500: 3,
      1000: 2,
      5000: 0,
    });
  });

  test('#3 Decreases limits after a successful withdrawal', () => {
    const limits = createLimits({ 50: 2, 100: 2, 500: 2, 1000: 2, 5000: 1 });

    atm(6650, limits);

    expect(limits).toEqual({
      50: 1,
      100: 1,
      500: 1,
      1000: 1,
      5000: 0,
    });
  });

  test('#4 Uses updated limits for subsequent withdrawals', () => {
    const limits = createLimits({ 50: 0, 100: 0, 500: 2, 1000: 1, 5000: 1 });

    expect(atm(5500, limits)).toEqual({
      50: 0,
      100: 0,
      500: 1,
      1000: 0,
      5000: 1,
    });
    expect(atm(1500, limits)).toEqual({
      50: 0,
      100: 0,
      500: 1,
      1000: 1,
      5000: 0,
    });
  });

  test('#5 Rejects a sum that is not divisible by the smallest nominal', () => {
    const limits = createLimits();
    const initialLimits = { ...limits };

    expect(atm(125, limits)).toBe('Error: Incorrect value');
    expect(limits).toEqual(initialLimits);
  });

  test('#6 Rejects a sum that cannot be composed from available banknotes', () => {
    const limits = createLimits({ 50: 0, 100: 0, 500: 0, 1000: 1, 5000: 0 });
    const initialLimits = { ...limits };

    expect(atm(1500, limits)).toBe('Error: Not enough money');
    expect(limits).toEqual(initialLimits);
  });

  test('#7 Rejects a negative sum', () => {
    const limits = createLimits();
    const initialLimits = { ...limits };

    expect(atm(-50, limits)).toBe('Error: Incorrect value');
    expect(limits).toEqual(initialLimits);
  });
});

import { describe, it, expect } from 'vitest';
import { digitPermutation } from './solution';

describe('Digit Permutation | Interview | Testcases', () => {
  it('#1 Should return true for numbers with same nonzero digits in same count (ignoring zeros)', () => {
    expect(digitPermutation(10023, 321)).toBe(true);
    expect(digitPermutation(1000, 1)).toBe(true);
    expect(digitPermutation(123, 123)).toBe(true);
    expect(digitPermutation(122, 212)).toBe(true);
    expect(digitPermutation(122, 221)).toBe(true);
    expect(digitPermutation(1001, 11)).toBe(true);
    expect(digitPermutation(1010, 11)).toBe(true);
  });

  it('#2 Should return false when nonzero digit counts differ', () => {
    expect(digitPermutation(112, 12)).toBe(false);
    expect(digitPermutation(123, 124)).toBe(false);
    expect(digitPermutation(122, 22)).toBe(false);
    expect(digitPermutation(1234, 4321)).toBe(true);
    expect(digitPermutation(1234, 43210)).toBe(true);
    expect(digitPermutation(1234, 4322)).toBe(false);
  });

  it('#3 Should handle numbers with only zeros and a single nonzero digit', () => {
    expect(digitPermutation(1000, 1)).toBe(true);
    expect(digitPermutation(10000, 1)).toBe(true);
    expect(digitPermutation(1, 1000)).toBe(true);
  });

  it('#4 Should treat numbers with no nonzero digits as equal', () => {
    expect(digitPermutation(0, 0)).toBe(true);
    expect(digitPermutation(0, 10)).toBe(false);
  });

  it('#5 Should work for large numbers', () => {
    expect(digitPermutation(123456789, 987654321)).toBe(true);
    expect(digitPermutation(123456789, 9876543210)).toBe(true);
    expect(digitPermutation(123456789, 9876543211)).toBe(false);
  });
});

/**
 *
 * @param init - initial value of counter
 *
 * @returns obj with methods to change counter value: increment/decrement by one and reset to the initial value
 */
export const createCounter = (
  init: number,
): {
  increment: () => number;
  decrement: () => number;
  reset: () => void;
} => {
  let n = init;
  return {
    increment: (): number => ++n,
    decrement: (): number => --n,
    reset: (): number => (n = init),
  };
};

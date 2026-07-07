/**
 *
 * @param init - initial value of counter
 *
 * @returns obj with methods to change counter value: increment/decrement by one and reset to the inital value
 */
export const createCounter = (init: number) => {
  let n = init;
  return {
    increment: () => ++n,
    decrement: () => --n,
    reset: () => n = init
  }
}
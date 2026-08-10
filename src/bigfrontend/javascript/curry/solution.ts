type Fn<T, R> = (...args: T[]) => R;
type Curried<T, R> = ((...args: T[]) => Curried<T, R>) | R;

/**
 * @param { Fn } fn - function
 * @returns { Curried } curried version of `fn`
 */
export const curry = <T, R>(fn: Fn<T, R>): Curried<T, R> => {
  function curried(this: unknown, ...args: T[]): Curried<T, R> {
    if (args.length >= fn.length) {
      return fn.call(this, ...args);
    }
    return (...rest: T[]): Curried<T, R> => curried.call(this, ...args, ...rest);
  }
  return curried;
};

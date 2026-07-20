type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => number;

/**
 *
 * @param fn = function that will be executed with `args` repeatedly with a delay of `t` milliseconds
 * @param args - arguments for provided `fn`
 * @param t - delay before next execution of `t`
 */
export const cancellable = (fn: Fn, args: JSONValue[], t: number): (() => unknown) => {
  fn(...args);
  const timerId = setInterval(() => fn(...args), t);
  return () => {
    clearInterval(timerId);
  };
};

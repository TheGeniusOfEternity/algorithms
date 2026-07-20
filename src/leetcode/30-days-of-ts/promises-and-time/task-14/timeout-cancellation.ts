type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
export type Fn = (...args: JSONValue[]) => number;

/**
 *
 * @param fn = function that will be executed with `args` in a delay of `t` milliseconds
 * @param args - arguments for provided `fn`
 * @param t - delay before execution of `t`
 */
export const cancellable = (fn: Fn, args: JSONValue[], t: number): (() => unknown) => {
  const timeoutId = setTimeout(() => fn(...args), t);
  return () => {
    clearTimeout(timeoutId);
  };
};

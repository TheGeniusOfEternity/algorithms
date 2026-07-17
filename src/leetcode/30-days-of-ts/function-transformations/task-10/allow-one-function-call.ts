export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

/**
 *
 * @param fn -  function that should be executed only single time
 *
 * @returns fn wrapper, that call {fn} only once and returns its value, then returns undefined
 */
export const once = (fn: Function): OnceFn => {
  let result: JSONValue | undefined;

  return (...args) => {
    if (result === undefined) {
      result = fn(...args);
      return result;
    }
    return undefined;
  };
}
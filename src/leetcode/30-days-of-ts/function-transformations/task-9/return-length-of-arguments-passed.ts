type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

/**
 *
 * @param args - function arguments (any value or type)
 *
 * @returns amount of provided arguments
 */
export const argumentsLength = (...args: JSONValue[]): number => args.length;
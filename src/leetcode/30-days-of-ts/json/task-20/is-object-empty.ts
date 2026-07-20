type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

/**
 *
 * @param obj - some object
 *
 * @returns true if object is empty and false otherwise
 */
export const isEmpty = (obj: Obj): boolean => !Object.keys(obj).length
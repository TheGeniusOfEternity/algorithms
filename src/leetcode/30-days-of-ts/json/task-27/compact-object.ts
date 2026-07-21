type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

/**
 *
 * @param obj - object to compact
 *
 * @returns A **compact object** - the same as the original object, except with keys containing **falsy** values removed.
 * This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys.
 * A value is considered **falsy** when `Boolean(value)` returns `false`.
 */
export const compactObject = (obj: Obj): Obj => {
  const result: Obj = Array.isArray(obj) ? [] : {};
  Object.entries(obj).forEach(([key, value]: [string, JSONValue | Obj | undefined]) => {
    if (Boolean(value)) {
      if (typeof value === 'object' && value !== null) {
        value = compactObject(value);
      }
      if (value !== undefined) {
        if (Array.isArray(result)) {
          result.push(value);
        } else {
          result[key] = value;
        }
      }
    }
  });

  return result;
};

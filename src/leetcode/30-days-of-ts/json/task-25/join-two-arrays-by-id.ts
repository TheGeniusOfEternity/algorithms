type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

/**
 *
 * @param `arr1` - first array to join
 * @param `arr2` - second arrays to join
 *
 * @retuns `joinedArray` - an array formed by merging `arr1` and `arr2` based on their `id` key. The length of `joinedArray` should be the length of unique values of `id`.
 * The returned array should be sorted in **ascending** order based on the `id` key.
 *
 * If a given `id` exists in one array but not the other, the single object with that `id` should be included in the result array without modification.
 *
 * If two objects share an `id`, their properties should be merged into a single object:
 *
 * If a key only exists in one object, that single key-value pair should be included in the object.
 * If a key is included in both objects, the value in the object from `arr2` should override the value from `arr1`.
 */
export const join = (arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] => {
  const result: Record<number, ArrayType> = {};
  arr1.forEach((el) => {
    result[el.id] = el;
  });
  arr2.forEach((el) => {
    const item = result[el.id] as ArrayType | undefined;
    if (item) {
      Object.keys(el).forEach((key) => {
        item[key] = el[key];
      });
      result[el.id] = item;
    } else {
      result[el.id] = el;
    }
  });
  return Object.values(result);
};

type Fn<T> = () => Promise<T>

/**
 * @param functions - array of asynchronous functions
 *
 * @returns a new Promise that is resolved with an array of results when all of the provided Promises
 * resolve, or rejected when any Promise is rejected.
 */
export const promiseAll = <T>(functions: Fn<T>[]): Promise<T[]> => {
  let count = functions.length
  const result: T[] = Array.from({ length: count });
  return new Promise((resolve, reject) => {
    for (let i = 0; i < count; i++) {
      functions[i]()
        .then(value => {
          result[i] = (value);
          count--;
          if (count === 0) resolve(result);
        })
        .catch(error => reject(error))
    }
  })
};
export type P = Promise<number>;

/**
 *
 * @param promise1 - first promise that will be resolved with a number
 * @param promise2 - second promise that will be resolved with a number
 *
 * @return promise that will be resolved with the sum of two numbers
 */
export const addTwoPromises = async (promise1: P, promise2: P): P => {
  const result = await Promise.all([promise1, promise2]);
  return result.reduce((acc, curr) => acc + curr, 0);
};

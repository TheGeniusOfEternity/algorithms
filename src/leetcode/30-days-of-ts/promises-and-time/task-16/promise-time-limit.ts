export type Fn = (...params: number[]) => Promise<number>;

/**
 *
 * @param fn - provided function that follow these rules:
 * - If the `fn` completes within the time limit of `t` milliseconds, the time limited function should resolve with the result.
 * - If the execution of the `fn` exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 * @param t - time limit in milliseconds
 *
 * @returns new time limited version of the input function `fn`.
 */
export const timeLimit =
  (fn: Fn, t: number): Fn =>
  async (...args: number[]) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
      fn(...args)
        .then((value) => {
          resolve(value);
        })
        .catch((error: unknown) => {
          const err = error as Error;
          reject(err);
        });
    });

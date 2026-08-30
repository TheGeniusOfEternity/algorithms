/**
 * Executes an asynchronous operation and automatically retries it
 * when the returned Promise is rejected.
 *
 * The first attempt is executed immediately. The `count` parameter
 * specifies the number of additional retry attempts after the first one.
 *
 * If any attempt succeeds, its result is returned immediately and no
 * further attempts are made. If all attempts fail, the returned Promise
 * is rejected with the error from the last failed attempt.
 *
 * @param fetcher - An asynchronous function to execute.
 * @param count - The number of additional retry attempts.
 * @returns A Promise that resolves with the first successful result.
 * @throws error from the last failed attempt if all attempts fail.
 *
 * @example
 * let calls = 0;
 *
 * function fetcher() {
 *   calls++;
 *
 *   if (calls < 3) {
 *     return Promise.reject(new Error('fail'));
 *   }
 *
 *   return Promise.resolve('SUCCESS');
 * }
 *
 * fetchWithAutoRetry(fetcher, 2).then((value) => {
 *   console.log(value); // SUCCESS
 *   console.log(calls); // 3
 * });
 */
export const fetchWithAutoRetry = async (
  fetcher: () => Promise<unknown>,
  count: number,
): Promise<unknown> =>
  fetcher().catch((error: unknown) => {
    if (count === 0) {
      return Promise.reject(error);
    }
    return fetchWithAutoRetry(fetcher, count - 1);
  });

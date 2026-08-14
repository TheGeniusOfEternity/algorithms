interface IdResponse {
  id: number;
  title: number;
}
/**
 * @param timeout - duration in `ms` before `batchFetch` will be called with all provided `id`'s.
 * Timeout will be reset immediately after `batchFetch` call without waiting its result.
 * @returns `smartFetch(id)` function.
 */
export const createSmartFetch = (
  timeout: number,
): ((id: number) => Promise<IdResponse>) => {
  let queue = new Map<
    number,
    (value: IdResponse | PromiseLike<IdResponse>) => void
  >();
  let timerId: null | NodeJS.Timeout = null;
  /**
   * Merges all requests per `timeout` into single one that calls `batchFetch`.
   * @param id - integer, per `timeout` must be unique
   * @return Promise with response of the requested `id`
   * @example
   *   console.clear();
   *
   *   const smartFetch = createSmartFetch(3000);
   *
   *   const a = smartFetch(10);
   *   const b = smartFetch(20);
   *
   *   console.log("ждём 100 мс, накапливаем запросы");
   *   await new Promise((resolve) => setTimeout(resolve, 100));
   *
   *   console.log("a:", await a); // a: { id: 10, title: 10 }
   *   console.log("b:", await b); // b: { id: 20, title: 20 }
   */
  return async function smartFetch(id: number): Promise<IdResponse> {
    return new Promise((resolve) => {
      queue.set(id, resolve);
      timerId ??= setTimeout(() => {
        timerId = null;
        const processing = queue;
        queue = new Map<
          number,
          (value: IdResponse | PromiseLike<IdResponse>) => void
        >();
        batchFetch([...processing.keys()])
          .then((results) => {
            processing.forEach((value, key) => {
              value(results[key]);
            });
          })
          .catch((error: unknown) => {
            //eslint-disable-next-line
            console.error(error);
          });
      }, timeout);
    });
  };
};

/**
 *
 * @param ids - array of integers, each `id` is unique
 *
 * @example
 * batchFetch([1, 2]) -> Promise { 1: { id: 1, title: 1' }, 2: { id: 2, title: 1' } }
 *
 * @returns Promise that is always fulfilled
 */
const batchFetch = (ids: number[]): Promise<Record<number, IdResponse>> => {
  return new Promise((resolve) => {
    //eslint-disable-next-line
    console.log('запрос к бэкенду', ids);
    setTimeout(() => {
      const res: Record<number, IdResponse> = {};
      ids.forEach((id) => (res[id] = { id, title: id }));
      resolve(res);
    }, Math.random() * 1000);
  });
};

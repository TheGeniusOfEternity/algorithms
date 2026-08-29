type AsyncFn = (url: string) => Promise<unknown>;
type Callback = (results: unknown[]) => unknown;

/**
 * Runs multiple asynchronous requests in parallel
 * and calls the callback after all requests are completed.
 *
 * Results are passed to the callback in the same order
 * as the corresponding URLs appear in the urls array.
 *
 * @param {string[]} urls - An array of URLs to fetch.
 * @param {(url: string) => Promise<unknown>} fetchUrl - An asynchronous function that fetches a single URL.
 * @param {(results: unknown[]) => void} callback - A function called after all requests are completed.
 * @returns {void}
 */
export const fetchUrlsWithCallback = (
  urls: string[],
  fetchUrl: AsyncFn,
  callback: Callback,
): void => {
  if (urls.length === 0) {
    callback([]);
    return;
  }

  const results = Array.from({ length: urls.length });
  let fetched = 0;

  for (let i = 0; i < urls.length; i++) {
    fetchUrl(urls[i])
      .then((res) => {
        results[i] = res;
        fetched++;
        if (fetched === urls.length) {
          callback(results);
        }
      })
      .catch(() => {
        /* empty */
      });
  }
};

export function fetchUrl(url: string): Promise<unknown> {
  const delay = { A: 150, B: 30, C: 80 }[url];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`result-${url}`);
    }, delay);
  });
}

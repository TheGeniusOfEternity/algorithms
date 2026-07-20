type F = (...args: number[]) => void;

/**
 *
 * @param fn - function to debounce
 * @param t - delay in milliseconds before execution
 *
 * @returns function whose execution is delayed by `t` milliseconds and whose execution is cancelled if it is called again within that window of time
 */
export const debounce = (fn: F, t: number): F => {
  let lastTimerId: NodeJS.Timeout;
  return (...args) => {
    clearTimeout(lastTimerId);
    lastTimerId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

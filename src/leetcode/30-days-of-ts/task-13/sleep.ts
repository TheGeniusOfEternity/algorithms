/**
 *
 * @param millis - duration in milliseconds for function to sleep
 *
 * @returns asynchronous function that will sleep for `millis` milliseconds
 */
export const sleep = (millis: number) =>
  new Promise(resolve => setTimeout(resolve, millis))
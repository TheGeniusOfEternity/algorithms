import { sleep } from "./sleep";

describe('Task #13 | Sleep | Example testcases', () => {
  test('#1 100 Millis', () => {
    const input = 100;
    const expected = 100;
    const t = Date.now();
    sleep(input).then(() => {
      const output = Date.now() - t;
      expect(output).toBe(expected);
    })
  });

  test('#2 200 Millis', () => {
    const input = 200;
    const expected = 200;
    const t = Date.now();
    sleep(input).then(() => {
      const output = Date.now() - t;
      expect(output).toBe(expected);
    })
  });
});
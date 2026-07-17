import { sleep } from "./sleep";

describe('Task #13 | Sleep | Example testcases', () => {
  test('#1 100 Millis', async () => {
    const input = 100;
    const expected = 100;
    const t = Date.now();
    const output = await sleep(input).then(() => Date.now() - t);
    expect(output).toBeCloseTo(expected, -2);
  });

  test('#2 200 Millis', async () => {
    const input = 200;
    const expected = 200;
    const t = Date.now();
    const output = await sleep(input).then(() => Date.now() - t);
    expect(output).toBeCloseTo(expected, -2);
  });
});
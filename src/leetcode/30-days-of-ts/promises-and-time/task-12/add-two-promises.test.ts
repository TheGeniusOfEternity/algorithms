import { addTwoPromises, P } from './add-two-promises';

describe('Task #12 | Two Promises | Example testcases', () => {
  test('#1 Sum of positive values', async () => {
    const promise1: P = new Promise((resolve) =>
      setTimeout(() => {
        resolve(2);
      }, 20),
    );
    const promise2: P = new Promise((resolve) =>
      setTimeout(() => {
        resolve(5);
      }, 60),
    );
    const expected = 7;
    const output = await addTwoPromises(promise1, promise2);
    expect(output).toBe(expected);
  });

  test('#1 Sum of negative & positive numbers', async () => {
    const promise1: P = new Promise((resolve) =>
      setTimeout(() => {
        resolve(10);
      }, 50),
    );
    const promise2: P = new Promise((resolve) =>
      setTimeout(() => {
        resolve(-12);
      }, 30),
    );
    const expected = -2;
    const output = await addTwoPromises(promise1, promise2);
    expect(output).toBe(expected);
  });
});

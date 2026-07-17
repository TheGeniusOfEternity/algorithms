import { promiseAll } from './execute-asynchronous-functions-in-parallel'

describe('Task #19 | Execute Asynchronous Functions In Parallel | Example TestCases', () => {
  test('#1 | Single function', async () => {
    const functions = [
      () => new Promise<number>(resolve => setTimeout(() => resolve(5), 200))
    ]
    const output = await promiseAll(functions)
    const expected = await Promise.all(functions.map(fn => fn()));
    expect(output).toEqual(expected);
  });

  test('#2 | Two functions with one rejected', async () => {
    const functions = [
      () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
      () => new Promise((_, reject) => setTimeout(() => reject("Error"), 100))
    ]
    const expected = "Error";
    try {
      await promiseAll(functions)
    } catch (error) {
      expect(error).toEqual(expected);
    }
  });

  test('#3 | Multiple functions', async () => {
    const functions = [
      () => new Promise<number>(resolve => setTimeout(() => resolve(4), 50)),
      () => new Promise<number>(resolve => setTimeout(() => resolve(10), 150)),
      () => new Promise<number>(resolve => setTimeout(() => resolve(16), 100))
    ]
    const output = await promiseAll(functions)
    const expected = await Promise.all(functions.map(fn => fn()));
    expect(output).toEqual(expected);
  });
})
import { createHelloWorld } from './create-hello-world-function';

describe('Task #1 | Create Hello World Function | Check example testcases', () => {
  test('Example #1', () => {
    const input: unknown[] = [];
    const f = createHelloWorld();
    const expected = 'Hello World';
    expect(f(input)).toBe(expected);
  });

  test('Example #2', () => {
    const input: unknown[] = [{}, null, 42];
    const f = createHelloWorld();
    const expected = 'Hello World';
    expect(f(input)).toBe(expected);
  });
});

/**
 * @retuns "Hello World" after call with any arguments
 */
export function createHelloWorld(..._args: unknown[]) {
  return (..._args: unknown[]): string => 'Hello World';
}

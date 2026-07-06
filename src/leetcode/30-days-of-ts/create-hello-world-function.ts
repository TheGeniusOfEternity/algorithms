/**
 * @retuns "Hello World" after call with any arguments
 */
export function createHelloWorld(...args: any[]) {
  return (...args: any[]) => "Hello World";
}
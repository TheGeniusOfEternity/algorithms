/**
 * @retuns "Hello World" after call with any arguments
 */
export function createHelloWorld(..._args: any[]) {
  return (..._args: any[]) => "Hello World";
}
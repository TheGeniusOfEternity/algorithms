/**
 * Class that provides the mathematical operations of addition, subtraction, multiplication, division, and exponentiation.
 * It allows consecutive operations to be performed using method chaining
 */
export class Calculator {
  /**
   * Current state after last operation
   */
  total;

  /**
   *
   * @param value - initial value
   */
  constructor(value: number) {
    this.total = value;
  }

  /**
   * adds the given number `value` to the `result` and returns the updated `Calculator`.
   */
  add(value: number): this {
    this.total += value;
    return this;
  }

  /**
   * subtracts the given number `value` from the `result` and returns the updated `Calculator`.
   */
  subtract(value: number): this {
    this.total -= value;
    return this;
  }

  /**
   * multiplies the `result`  by the given number `value` and returns the updated `Calculator`.
   */
  multiply(value: number): this {
    this.total *= value;
    return this;
  }

  /**
   * divides the `result` by the given number `value` and returns the updated `Calculator`. If the passed `value` is 0, an error "Division by zero is not allowed" should be thrown.
   */
  divide(value: number): this {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.total /= value;
    return this;
  }

  /**
   * Raises the `result` to the power of the given number `value` and returns the updated `Calculator`.
   */
  power(value: number): this {
    this.total **= value;
    return this;
  }

  /**
   * @returns the `result` of all operations.
   */
  getResult(): number {
    return this.total;
  }
}

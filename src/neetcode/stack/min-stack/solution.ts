export class MinStack {
  curMin = Infinity;
  minStack: number[] = [];
  stack: number[] = [];

  /**
   * Pushes the element `val` onto the stack.
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.curMin = Math.min(this.curMin, val);
    this.minStack.push(this.curMin);
    this.stack.push(val);
  }

  /**
   *  Removes the element on the top of the stack.
   * @return {void}
   */
  pop(): void {
    this.stack.pop();
    this.minStack.pop();
    this.curMin = this.minStack[this.minStack.length - 1] ?? Infinity;
  }

  /**
   * gets the top element of the stack.
   * @return {number}
   */
  top(): number {
    return this.stack[this.stack.length - 1];
  }

  /**
   * retrieves the minimum element in the stack.
   * @return {number}
   */
  getMin(): number {
    return this.curMin;
  }
}

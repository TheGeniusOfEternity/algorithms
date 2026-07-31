import { MinStack } from './solution';

describe('Min Stack | NeetCode | RoadMap | Testcases', () => {
  test('#1 Keeps the minimum after pop', () => {
    const stack = new MinStack();

    stack.push(1);
    stack.push(2);
    stack.push(0);

    expect(stack.getMin()).toBe(0);

    stack.pop();

    expect(stack.top()).toBe(2);
    expect(stack.getMin()).toBe(1);
  });

  test('#2 Supports negative numbers', () => {
    const stack = new MinStack();

    stack.push(-2);
    stack.push(0);
    stack.push(-3);

    expect(stack.getMin()).toBe(-3);

    stack.pop();

    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });

  test('#3 Keeps duplicate minimum values', () => {
    const stack = new MinStack();

    stack.push(2);
    stack.push(1);
    stack.push(1);
    stack.push(3);

    expect(stack.getMin()).toBe(1);

    stack.pop();
    stack.pop();

    expect(stack.top()).toBe(1);
    expect(stack.getMin()).toBe(1);

    stack.pop();

    expect(stack.top()).toBe(2);
    expect(stack.getMin()).toBe(2);
  });

  test('#4 Handles push after pop', () => {
    const stack = new MinStack();

    stack.push(10);
    stack.pop();
    stack.push(20);

    expect(stack.top()).toBe(20);

    stack.push(-20);

    expect(stack.getMin()).toBe(-20);
  });
});

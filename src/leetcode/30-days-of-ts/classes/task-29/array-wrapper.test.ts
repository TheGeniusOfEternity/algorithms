import { ArrayWrapper } from './array-wrapper';

describe('Task #29 | Array Wrapper | Testcases', () => {
  test('#1 Sum of two arrays', () => {
    const expected = 10;
    const obj1 = new ArrayWrapper([1, 2]);
    const obj2 = new ArrayWrapper([3, 4]);
    expect(obj1.valueOf() + obj2.valueOf()).toBe(expected);
  });

  test('#2 String representation ', () => {
    const expected = '[23,98,42,70]';
    const obj = new ArrayWrapper([23, 98, 42, 70]);
    expect(obj.toString()).toBe(expected);
  });

  test('#3 String representation ', () => {
    const expected = 0;
    const obj1 = new ArrayWrapper([]);
    const obj2 = new ArrayWrapper([]);
    expect(obj1.valueOf() + obj2.valueOf()).toBe(expected);
  });
});

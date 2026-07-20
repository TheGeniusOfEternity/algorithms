import './array-prototype-last';

describe('Task #22 | Array Prototype Last | Testcases', () => {
  test('#1 Non-empty Array', () => {
    const arr = [null, {}, 3];
    const expected = 3;
    const output = arr.last();
    expect(output).toEqual(expected);
  });

  test('#2 Empty Array', () => {
    const arr: number[] = [];
    const expected = -1;
    const output = arr.last();
    expect(output).toEqual(expected);
  });
});

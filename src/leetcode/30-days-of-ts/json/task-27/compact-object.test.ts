import { compactObject } from './compact-object';

describe('Task #27 | Compact Object', () => {
  test('#1 Flat Array', () => {
    const obj = [null, 0, false, 1];
    const expected = [1];
    const output = compactObject(obj);
    expect(output).toEqual(expected);
  });

  test('#2 Two-layered object', () => {
    const obj = { a: null, b: [false, 1] };
    const expected = { b: [1] };
    const output = compactObject(obj);
    expect(output).toEqual(expected);
  });

  test('#3 Two-layered object', () => {
    const obj = [null, 0, 5, [0], [false, 16]];
    const expected = [5, [], [16]];
    const output = compactObject(obj);
    expect(output).toEqual(expected);
  });
});

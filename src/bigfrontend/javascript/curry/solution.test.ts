import { curry } from './solution';

describe('Curry | BigFrontEnd | TestCases', () => {
  test('#1 Default Usage', () => {
    let output = curry(
      (a: number, b: number, c: number): string =>
        `${a.toString()}_${b.toString()}_${c.toString()}`,
    );
    const expected = '1_2_3';
    if (typeof output !== 'string') {
      output = output(1, 2, 3);
    }
    expect(output).toBe(expected);
  });

  test('#2 One arg first, then other', () => {
    let output = curry(
      (a: number, b: number, c: number): string =>
        `${a.toString()}_${b.toString()}_${c.toString()}`,
    );
    const expected = '1_2_3';
    if (typeof output !== 'string') {
      output = output(1);
      if (typeof output !== 'string') {
        output = output(2, 3);
      }
    }
    expect(output).toBe(expected);
  });

  test('#3 Most args first, then last', () => {
    let output = curry(
      (a: number, b: number, c: number): string =>
        `${a.toString()}_${b.toString()}_${c.toString()}`,
    );
    const expected = '1_2_3';
    if (typeof output !== 'string') {
      output = output(1, 2);
      if (typeof output !== 'string') {
        output = output(3);
      }
    }
    expect(output).toBe(expected);
  });
});

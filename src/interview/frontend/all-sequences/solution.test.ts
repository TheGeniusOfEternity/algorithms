import { allSequences } from './solution';

describe('All Sequences | Interview | Testcases', () => {
  test('#1 Returns every combination in the required order', () => {
    const nextSequence = allSequences([
      [0, 1, 2],
      ['a', 'b'],
      ['?', '!', '.'],
    ]);

    const sequences = Array.from({ length: 18 }, () => nextSequence());

    expect(sequences).toEqual([
      '0 a ?',
      '0 a !',
      '0 a .',
      '0 b ?',
      '0 b !',
      '0 b .',
      '1 a ?',
      '1 a !',
      '1 a .',
      '1 b ?',
      '1 b !',
      '1 b .',
      '2 a ?',
      '2 a !',
      '2 a .',
      '2 b ?',
      '2 b !',
      '2 b .',
    ]);
  });

  test('#2 Returns undefined after all combinations are exhausted', () => {
    const nextSequence = allSequences([
      ['a', 'b'],
      [1, 2],
    ]);

    expect(nextSequence()).toBe('a 1');
    expect(nextSequence()).toBe('a 2');
    expect(nextSequence()).toBe('b 1');
    expect(nextSequence()).toBe('b 2');
    expect(nextSequence()).toBeUndefined();
    expect(nextSequence()).toBeUndefined();
  });

  test('#3 Supports a single array', () => {
    const nextSequence = allSequences([['first', 'second']]);

    expect(nextSequence()).toBe('first');
    expect(nextSequence()).toBe('second');
    expect(nextSequence()).toBeUndefined();
  });

  test('#4 Returns undefined when one of the arrays is empty', () => {
    const nextSequence = allSequences([['a', 'b'], [], [1, 2]]);

    expect(nextSequence()).toBeUndefined();
  });
});

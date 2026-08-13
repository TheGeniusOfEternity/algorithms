/**
 * @param words - array of word arrays. Each word array contains of characters/numbers of same time
 *
 * @return {function} `fn` that returns words combination in sequence.
 * If there are no combinations left, `undefined` will be returned.
 *
 * @example
 * const nextSequence = allSequences([
 *   [0, 1, 2],
 *   ["a", "b"],
 *   ["?", "!", "."],
 * ]);
 *
 * console.log(nextSequence()); // "0 a ?"
 * console.log(nextSequence()); // "0 a !"
 * console.log(nextSequence()); // "0 a ."
 * console.log(nextSequence()); // "0 b ?"
 * // ...
 * console.log(nextSequence()); // "2 b ."
 * console.log(nextSequence()); // undefined
 */
export const allSequences = (
  words: (number | string)[][],
): (() => string | undefined) => {
  const length = words.length;
  const indices = Array.from<number>({ length }).fill(0);
  let exhausted = words.length === 0 || words.some((word) => word.length === 0);

  return () => {
    if (exhausted) {
      return undefined;
    }

    const combination = words.map((word, idx) => word[indices[idx]]).join(' ');

    for (let i = length - 1; i >= 0; i--) {
      indices[i]++;
      if (indices[i] < words[i].length) {
        break;
      }
      indices[i] = 0;
      if (i === 0) {
        exhausted = true;
      }
    }

    return combination;
  };
};

import { createList, listToArray } from '../common';
import { addTwoNumbers } from './solution';

describe('Add Two Numbers | NeetCode | RoadMap | Testcases', () => {
  test('#1 Adds two numbers with the same number of digits', () => {
    const l1 = createList([2, 4, 3]);
    const l2 = createList([5, 6, 4]);

    expect(listToArray(addTwoNumbers(l1, l2))).toEqual([7, 0, 8]);
  });

  test('#2 Adds zero to zero', () => {
    const l1 = createList([0]);
    const l2 = createList([0]);

    expect(listToArray(addTwoNumbers(l1, l2))).toEqual([0]);
  });

  test('#3 Handles lists of different lengths and multiple carries', () => {
    const l1 = createList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = createList([9, 9, 9, 9]);

    expect(listToArray(addTwoNumbers(l1, l2))).toEqual([
      8, 9, 9, 9, 0, 0, 0, 1,
    ]);
  });

  test('#4 Appends a node for a final carry', () => {
    const l1 = createList([5]);
    const l2 = createList([5]);

    expect(listToArray(addTwoNumbers(l1, l2))).toEqual([0, 1]);
  });
});

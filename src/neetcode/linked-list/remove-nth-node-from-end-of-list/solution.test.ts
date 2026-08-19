import { createList, listToArray } from '../common';
import { removeNthFromEnd } from './solution';

describe('Remove Nth Node From End Of List | NeetCode | RoadMap | Testcases', () => {
  test('#1', () => {
    const head = createList([1, 2, 3, 4]);
    const n = 2;
    const expected = [1, 2, 4];
    const output = removeNthFromEnd(head, n);
    expect(listToArray(output)).toEqual(expected);
  });

  test('#2', () => {
    const head = createList([5]);
    const n = 1;
    const expected: number[] = [];
    const output = removeNthFromEnd(head, n);
    expect(listToArray(output)).toEqual(expected);
  });

  test('#3', () => {
    const head = createList([1, 2]);
    const n = 2;
    const expected = [2];
    const output = removeNthFromEnd(head, n);
    expect(listToArray(output)).toEqual(expected);
  });
});

import { createList, listToArray } from '../common';
import { reorderList } from './solution';

describe('Reorder List | NeetCode | RoadMap | Testcases', () => {
  test('#1', () => {
    const head = createList([2, 4, 6, 8]);
    const expected = [2, 8, 4, 6];
    reorderList(head);
    expect(listToArray(head)).toEqual(expected);
  });

  test('#2', () => {
    const head = createList([2, 4, 6, 8, 10]);
    const expected = [2, 10, 4, 8, 6];
    reorderList(head);
    expect(listToArray(head)).toEqual(expected);
  });

  test('#3', () => {
    const head = createList([]);
    const expected: number[] = [];
    reorderList(head);
    expect(listToArray(head)).toEqual(expected);
  });
});

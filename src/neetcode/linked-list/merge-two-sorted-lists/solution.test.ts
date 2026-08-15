import { createList, ListNode, listToArray } from '../common';
import { mergeTwoLists } from './solution';

describe('Merge Two Sorted Lists | NeetCode | RoadMap | Testcases', () => {
  test('merges two sorted linked lists', () => {
    const list1 = createList([1, 2, 4]);
    const list2 = createList([1, 3, 5]);

    expect(listToArray(mergeTwoLists(list1, list2))).toEqual([
      1, 1, 2, 3, 4, 5,
    ]);
  });

  test('returns null when both lists are empty', () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  test.each([
    ['first', null, createList([1, 2, 3])],
    ['second', createList([1, 2, 3]), null],
  ])(
    'returns the non-empty list when the %s list is empty',
    (_, list1, list2) => {
      const nonEmptyList = list1 ?? list2;

      expect(mergeTwoLists(list1, list2)).toBe(nonEmptyList);
    },
  );

  test('reuses the nodes from the original lists', () => {
    const first = new ListNode(1);
    const fourth = new ListNode(4);
    first.next = fourth;

    const second = new ListNode(2);
    const third = new ListNode(3);
    second.next = third;

    const merged = mergeTwoLists(first, second);

    expect(merged).toBe(first);
    expect(first.next).toBe(second);
    expect(second.next).toBe(third);
    expect(third.next).toBe(fourth);
    expect(fourth.next).toBeNull();
  });
});

import { createList, ListNode } from '../common';
import { hasCycle } from './solution';

describe('Linked List Cycle | NeetCode | RoadMap | Testcases', () => {
  test('#1 Returns false for an empty list', () => {
    expect(hasCycle(null)).toBe(false);
  });

  test('#2 Returns false for a list without a cycle', () => {
    const head = createList([1, 2, 3, 4]);

    expect(hasCycle(head)).toBe(false);
  });

  test('#3 Returns false for a single node without a cycle', () => {
    const head = new ListNode(1);

    expect(hasCycle(head)).toBe(false);
  });

  test('#4 Detects a cycle that starts in the middle of the list', () => {
    const first = new ListNode(3);
    const cycleStart = new ListNode(2);
    const third = new ListNode(0);
    const tail = new ListNode(-4);

    first.next = cycleStart;
    cycleStart.next = third;
    third.next = tail;
    tail.next = cycleStart;

    expect(hasCycle(first)).toBe(true);
  });

  test('#5 Detects a cycle that points back to the head', () => {
    const first = new ListNode(1);
    const second = new ListNode(2);
    first.next = second;
    second.next = first;

    expect(hasCycle(first)).toBe(true);
  });

  test('#6 Detects a self-referencing node', () => {
    const head = new ListNode(1);
    head.next = head;

    expect(hasCycle(head)).toBe(true);
  });
});

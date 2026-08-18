import { ListNode } from '../common';

/**
 * If a given linked list with head `head` of `length = n` is represented as:
 *
 * `[0, 1, ..., n - 2, n - 1]`
 *
 * Then function reorders its nodes to be in the following order:
 *
 * `[0, n-1, 1, n-2, 2, n-3, ...]`
 *
 * @param {ListNode} head - the head of a singly linked-list
 * @return {void}
 */
export const reorderList = (head: ListNode | null): void => {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow?.next ?? null;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null;
  let curr: ListNode | null = slow;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let l1 = head;
  let l2 = prev;

  while (l2 !== null && l1 !== null) {
    const nextF = l1.next;
    const nextS = l2.next;
    l1.next = l2;
    l2.next = nextF;

    l1 = nextF;
    l2 = nextS;
  }

  if (l1 !== null) {
    l1.next = null;
  }
};

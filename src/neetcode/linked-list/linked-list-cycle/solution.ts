import { ListNode } from '../common';

/**
 * @param {ListNode} head - the beginning of a linked list
 * @return {boolean} - `true` if there is a cycle in the linked list, `false` otherwise.
 */
export const hasCycle = (head: ListNode | null): boolean => {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow?.next ?? null;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

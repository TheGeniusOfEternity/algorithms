import { ListNode } from '../common';

/**
 * @param {ListNode} head - the beginning of a singly linked list
 * @return {ListNode} - the new beginning of the reversed list.
 */
export const reverseList = (head: ListNode | null): ListNode | null => {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr !== null) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

import { ListNode } from '../common';

/**
 * Removes the `nth` node from the end of the list
 * @param {ListNode} head - start of a linked list
 * @param {number} n - an integer
 * @return {ListNode} - head of result list
 */
export const removeNthFromEnd = (
  head: ListNode | null,
  n: number,
): ListNode | null => {
  if (head === null) {
    return null;
  }
  let curr: ListNode | null = head;
  let length = 0;
  while (curr !== null) {
    curr = curr.next;
    length++;
  }

  let prev: ListNode | null = null;
  curr = head;

  for (let i = 0; i < length; i++) {
    if (i === length - n) {
      if (prev === null) {
        head = head.next;
      } else {
        prev.next = curr?.next ?? null;
      }
      break;
    }
    prev = curr;
    curr = curr?.next ?? null;
  }

  return head;
};

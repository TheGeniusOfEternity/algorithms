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
  const dummy = new ListNode(0, head);
  let first: ListNode | null = dummy;
  let second: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    first = first?.next ?? null;
  }

  while (first !== null) {
    first = first.next;
    second = second?.next ?? null;
  }

  if (second !== null) {
    second.next = second.next?.next ?? null;
  }

  return dummy.next;
};

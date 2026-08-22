import { ListNode } from '../common';

/**
 * @param {ListNode} l1 - **non-empty** linked list, represents a non-negative integer with its digits in reversed order
 * @param {ListNode} l2 - **non-empty** linked list, represents a non-negative integer with its digits in reversed order
 * @return {ListNode} the sum of the two numbers as a linked list.
 */
export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  const dummy = new ListNode(0);
  let curr: ListNode = dummy;
  let extra = 0;
  while (l1 !== null || l2 !== null) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + extra;
    const node = l1 ?? l2;
    if (!node) {
      break;
    }

    extra = sum > 9 ? 1 : 0;
    node.val = sum % 10;
    curr.next = node;

    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }

    curr = curr.next;
  }

  if (extra) {
    curr.next = new ListNode(1);
  }

  return dummy.next;
};

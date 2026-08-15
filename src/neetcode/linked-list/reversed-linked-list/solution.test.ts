import { ListNode, reverseList } from './solution';

const createList = (values: number[]): ListNode | null => {
  const dummy = new ListNode();
  let tail = dummy;

  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }

  return dummy.next;
};

const listToArray = (head: ListNode | null): number[] => {
  const values: number[] = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

describe('Reversed Linked List | NeetCode | RoadMap | Testcases', () => {
  test('#1 Reverses a linked list', () => {
    const head = createList([0, 1, 2, 3]);

    expect(listToArray(reverseList(head))).toEqual([3, 2, 1, 0]);
  });

  test('returns null for an empty list', () => {
    expect(reverseList(null)).toBeNull();
  });

  test('#2 Returns the same node for a single-node list', () => {
    const head = new ListNode(42);

    expect(reverseList(head)).toBe(head);
    expect(head.next).toBeNull();
  });

  test('#3 Reverses the existing links instead of creating new nodes', () => {
    const first = new ListNode(1);
    const second = new ListNode(2);
    const third = new ListNode(3);
    first.next = second;
    second.next = third;

    const reversed = reverseList(first);

    expect(reversed).toBe(third);
    expect(third.next).toBe(second);
    expect(second.next).toBe(first);
    expect(first.next).toBeNull();
  });
});

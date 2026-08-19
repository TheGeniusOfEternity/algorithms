export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export const createList = (values: number[]): ListNode | null => {
  const dummy = new ListNode();
  let tail = dummy;

  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }

  return dummy.next;
};

export const listToArray = (head: ListNode | null): number[] => {
  const values: number[] = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

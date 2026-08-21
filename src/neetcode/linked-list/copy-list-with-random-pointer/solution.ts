export class Node {
  val;
  next;
  random;

  constructor(
    val: number,
    next: Node | null = null,
    random: Node | null = null,
  ) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

/**
 * Creates a deep copy of the list.
 * @param {Node} head - the head of a linked list where each node contains an additional pointer `random`,
 * which may point to any node in the list, or `null`
 * @return the head of the copied linked list
 */
export const copyRandomList = (head: Node | null): Node | null => {
  if (head === null) {
    return null;
  }

  const nodes = new Map<Node | null, Node | null>();
  let curr: Node | null = head;

  while (curr) {
    nodes.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    const copy = nodes.get(curr);
    if (copy) {
      copy.next = nodes.get(curr.next) ?? null;
      copy.random = nodes.get(curr.random) ?? null;
    }
    curr = curr.next;
  }

  return nodes.get(head) ?? null;
};

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
  const nodes = new Map<Node | null, Node | null>();
  nodes.set(null, null);

  let curr = head;
  while (curr) {
    if (!nodes.has(curr)) {
      nodes.set(curr, new Node(0));
    }
    if (!nodes.has(curr.next)) {
      nodes.set(curr.next, new Node(0));
    }
    if (!nodes.has(curr.random)) {
      nodes.set(curr.random, new Node(0));
    }
    const currCopy = nodes.get(curr);
    if (currCopy) {
      currCopy.val = curr.val;
      currCopy.next = nodes.get(curr.next) ?? null;
      currCopy.random = nodes.get(curr.random) ?? null;
    }

    curr = curr.next;
  }

  return nodes.get(head) ?? null;
};

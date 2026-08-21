import { copyRandomList, Node } from './solution';

describe('Copy List With Random Pointer | NeetCode | RoadMap | Testcases', () => {
  const buildList = (
    arr: { val: number; randomIndex: number }[],
  ): Node | null => {
    if (arr.length === 0) {
      return null;
    }
    const nodes = arr.map((item) => new Node(item.val));
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
        nodes[i].next = nodes[i + 1];
      }
      const ri = arr[i].randomIndex;
      nodes[i].random = ri >= 0 ? nodes[ri] : null;
    }
    return nodes[0];
  };

  const areListsEqual = (a: Node | null, b: Node | null): boolean => {
    const mapOriginal = new Map<Node, number>();
    const mapCopy = new Map<Node, number>();

    let curr = a;
    let idx = 0;
    while (curr) {
      mapOriginal.set(curr, idx++);
      curr = curr.next;
    }

    curr = b;
    idx = 0;
    while (curr) {
      mapCopy.set(curr, idx++);
      curr = curr.next;
    }

    if (mapOriginal.size !== mapCopy.size) {
      return false;
    }

    let nodeA = a;
    let nodeB = b;
    while (nodeA && nodeB) {
      if (nodeA.val !== nodeB.val) {
        return false;
      }

      const randomA = nodeA.random;
      const randomB = nodeB.random;

      if (randomA === null && randomB === null) {
        // ok
      } else if (randomA !== null && randomB !== null) {
        const idxA = mapOriginal.get(randomA);
        const idxB = mapCopy.get(randomB);
        if (idxA !== idxB) {
          return false;
        }
      } else {
        return false;
      }

      nodeA = nodeA.next;
      nodeB = nodeB.next;
    }

    return true;
  };

  test('#1 Should return null for empty list', () => {
    expect(copyRandomList(null)).toBeNull();
  });

  test('#2 Should copy single node with random null', () => {
    const head = new Node(1);
    const copy = copyRandomList(head);
    expect(copy).not.toBeNull();
    expect(copy?.val).toBe(1);
    expect(copy?.next).toBeNull();
    expect(copy?.random).toBeNull();

    expect(head.next).toBeNull();
    expect(head.random).toBeNull();
  });

  test('#3 Should copy single node with random pointing to itself', () => {
    const head = new Node(1);
    head.random = head;
    const copy = copyRandomList(head);
    expect(copy).not.toBeNull();
    expect(copy?.val).toBe(1);
    expect(copy?.next).toBeNull();

    expect(copy?.random).toEqual(copy);

    expect(head.random).toEqual(head);
  });

  test('#4 Should copy list with 2 nodes and cross random', () => {
    const nodes = buildList([
      { val: 1, randomIndex: 1 }, // 1 -> 2
      { val: 2, randomIndex: 0 }, // 2 -> 1
    ]);
    const copy = copyRandomList(nodes);
    expect(areListsEqual(nodes, copy)).toBe(true);
  });

  test('#5 Should copy list with random pointing to previous nodes', () => {
    const nodes = buildList([
      { val: 1, randomIndex: -1 },
      { val: 2, randomIndex: 0 },
      { val: 3, randomIndex: 1 },
      { val: 4, randomIndex: 2 },
    ]);
    const copy = copyRandomList(nodes);
    expect(areListsEqual(nodes, copy)).toBe(true);
  });

  test('#6 Should copy list with random pointing to next nodes', () => {
    const nodes = buildList([
      { val: 1, randomIndex: 3 },
      { val: 2, randomIndex: 2 },
      { val: 3, randomIndex: 1 },
      { val: 4, randomIndex: 0 },
    ]);
    const copy = copyRandomList(nodes);
    expect(areListsEqual(nodes, copy)).toBe(true);
  });

  test('#7 Should copy list with complex random (self, null, cross)', () => {
    const nodes = buildList([
      { val: 1, randomIndex: 0 }, // self
      { val: 2, randomIndex: -1 }, // null
      { val: 3, randomIndex: 1 }, // points to node 2
      { val: 4, randomIndex: 3 }, // self
    ]);
    const copy = copyRandomList(nodes);
    expect(areListsEqual(nodes, copy)).toBe(true);
  });

  test('#8 Should not modify original list', () => {
    const original = buildList([
      { val: 1, randomIndex: 2 },
      { val: 2, randomIndex: -1 },
      { val: 3, randomIndex: 0 },
    ]);
    const originalSnapshot = buildList([
      { val: 1, randomIndex: 2 },
      { val: 2, randomIndex: -1 },
      { val: 3, randomIndex: 0 },
    ]);
    copyRandomList(original);
    expect(areListsEqual(original, originalSnapshot)).toBe(true);
  });
});

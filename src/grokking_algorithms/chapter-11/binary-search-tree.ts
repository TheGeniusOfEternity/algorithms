// BST implementation

/**
 * @value - value of node
 * @left - left child
 * @right - right child
 */
class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;
  
  constructor(value: number, left: BSTNode | null, right: BSTNode | null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 *
 * @param nums - unsorted array of nums
 *
 * @returns root of Binary Search Tree
 */
export const buildBST = (nums: number[]): BSTNode | null => {
  let root: BSTNode | null = null;
  const addNode = (node: BSTNode | null, value: number): BSTNode | null  => {
    if (node === null) return new BSTNode(value, null, null);
    if (node.value > value) node.left = addNode(node.left, value);
    else node.right = addNode(node.right, value);
    return node;
  }

  for (const num of nums) {
    root = addNode(root, num);
  }
  return root;
}
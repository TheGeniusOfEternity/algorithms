interface Tree {
  type: string;
  name: string;
  children: Tree[];
}

/**
 * @param tree - nested object of nodes
 * @param type - searching param to find nodes
 *
 * @example
 *
 * const tree = {
 *   type: 'folder',
 *   name: 'root',
 *   children: [
 *     { type: 'file', name: 'file-1', children: [] },
 *     {
 *       type: 'folder',
 *       name: 'docs',
 *       children: [{ type: 'file', name: 'file-2', children: [] }],
 *     },
 *     { type: 'file', name: 'file-3', children: [] },
 *   ],
 * };
 *
 * console.log(findByType(tree, 'file').map((node) => node.name));
 * // Expected: ["file-1", "file-2", "file-3"]
 */
export const findByType = (tree: Tree, type: string): Tree[] => {
  const matches: Tree[] = [];
  const stack: Tree[] = [tree];

  while (stack.length) {
    const node = stack.pop();
    if (node) {
      if (node.type === type) {
        matches.push(node);
      }

      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  }

  return matches;
};

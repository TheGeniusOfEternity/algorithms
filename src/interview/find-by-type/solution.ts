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
  const dfs = (node: Tree): void => {
    if (node.type === type) {
      matches.push(node);
    }
    node.children.forEach((child: Tree) => {
      dfs(child);
    });
  };
  dfs(tree);

  return matches;
};

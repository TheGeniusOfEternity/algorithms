interface Comment {
  id: number;
  text: string;
  level: number;
}

interface Tree extends Comment {
  children?: Tree[];
}

/**
 * @param comments - array of elements with id, text & level
 *
 * @returns array of comments with `level = 0`.
 * Element with `level N` must be inserted into `children` property of last previous element with `N - 1 level`.
 * `comments` array is not mutated
 *
 * @example
 * function buildCommentsTree(comments) {
 *   // TODO
 * }
 *
 * const comments = [
 *   { id: 1, text: 'A', level: 0 },
 *   { id: 2, text: 'B', level: 1 },
 *   { id: 3, text: 'C', level: 2 },
 *   { id: 4, text: 'D', level: 1 },
 *   { id: 5, text: 'E', level: 0 },
 * ];
 *
 * console.log(JSON.stringify(buildCommentsTree(comments), null, 2));
 *
 * // Expected structure:
 * // A
 * // ├─ B
 * // │  └─ C
 * // └─ D
 * // E
 */
export const buildCommentsTree = (comments: Comment[]): Tree[] => {
  const roots: Tree[] = [];
  const commentsMap = new Map<number, Tree>();
  for (const comment of comments) {
    const node: Tree = { ...comment };
    commentsMap.set(comment.level, node);
    if (comment.level === 0) {
      roots.push(node);
      continue;
    }

    const parent = commentsMap.get(comment.level - 1);
    if (!parent) {
      continue;
    }

    parent.children ??= [];
    parent.children.push(node);
  }

  return roots;
};

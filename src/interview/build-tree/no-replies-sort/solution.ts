import { Message, NestedMessage } from '../common';

/**
 * @param messages - arrays of messages
 * @returns array of nested messages
 * @example
 *
 * const messages = [
 *   { Message: 'Deep', Pass: '1.10.5' },
 *   { Message: 'Root', Pass: '1' },
 *   { Message: 'Child 10', Pass: '1.10' },
 *   { Message: 'Child 2', Pass: '1.2' },
 * ];
 *
 * console.log(JSON.stringify(buildTree(messages), null, 2));
 *
 * // Expected
 * // Root
 * // ├─ Child 10
 * // │  └─ Deep
 * // └─ Child 2
 */
export const buildTree = (messages: Message[]): NestedMessage[] => {
  const map = new Map<
    string,
    { copy: NestedMessage; parentPath: string | null }
  >();
  const roots: NestedMessage[] = [];
  for (const message of messages) {
    const parentPathIdx = message.pass.lastIndexOf('.');
    const copy = { message: message.message };
    map.set(message.pass, {
      copy,
      parentPath:
        parentPathIdx === -1 ? null : message.pass.slice(0, parentPathIdx),
    });
  }

  for (const { copy, parentPath } of map.values()) {
    if (parentPath === null) {
      roots.push(copy);
      continue;
    }
    const parent = map.get(parentPath)?.copy;
    if (!parent) {
      roots.push(copy);
      continue;
    }
    parent.replies ??= [];
    parent.replies.push(copy);
  }

  return roots;
};

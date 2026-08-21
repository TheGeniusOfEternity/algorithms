import { Message, NestedMessage } from '../common';

/**
 * @param messages - arrays of messages
 * @returns array of nested messages with sorted
 * @example
 *
 * const messages = [
 *   { Message: 'Child 10', Pass: '1.10' },
 *   { Message: 'Child 2', Pass: '1.2' },
 *   { Message: 'Root', Pass: '1' },
 *   { Message: 'Child 1', Pass: '1.1' },
 * ];
 *
 * console.log(JSON.stringify(buildMessageTree(messages), null, 2));
 *
 * // In Replies of root children must be sorted:
 * // Child 1 -> Child 2 -> Child 10
 */
export const buildTree = (messages: Message[]): NestedMessage[] => {
  const msgMap = new Map<
    string,
    { message: NestedMessage; parentPath: string | null }
  >();
  const ordersMap = new Map<NestedMessage, number>();
  const roots: NestedMessage[] = [];
  const groups: NestedMessage[][] = [];
  for (const msg of messages) {
    const message = { message: msg.message };
    const parentPathIdx = msg.pass.lastIndexOf('.');
    msgMap.set(msg.pass, {
      message,
      parentPath:
        parentPathIdx === -1 ? null : msg.pass.slice(0, parentPathIdx),
    });
    ordersMap.set(message, Number(msg.pass.slice(parentPathIdx + 1)));
  }

  for (const { message, parentPath } of msgMap.values()) {
    if (parentPath === null) {
      roots.push(message);
      continue;
    }
    const parent = msgMap.get(parentPath)?.message;
    if (!parent) {
      roots.push(message);
      continue;
    }
    if (!parent.replies) {
      parent.replies = [];
      groups.push(parent.replies);
    }
    parent.replies.push(message);
  }

  for (const group of groups) {
    group.sort((a, b) => (ordersMap.get(a) ?? 1) - (ordersMap.get(b) ?? 1));
  }

  return roots;
};

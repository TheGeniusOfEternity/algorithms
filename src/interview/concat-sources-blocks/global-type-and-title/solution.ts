export interface Block {
  type: string;
  title: string;
}

/**
 * @param primaryBlocks - blocks from main source
 * @param secondaryBlocks - blocks from secondary sources
 * @param orders - requested types in order
 * @returns array of blocks, ordered by `orders`, without repeats in `types `or `titles`.
 * Primary blocks are in priority.
 */
export const concatSourcesBlocks = (
  primaryBlocks: Block[],
  secondaryBlocks: Block[],
  orders: string[],
): Block[] => {
  const result: Block[] = [];
  const usedTitles = new Set<string>();
  const usedTypes = new Set<string>();

  const groupByType = (blocks: Block[]): Map<string, Set<Block>> => {
    const map = new Map<string, Set<Block>>();
    for (const block of blocks) {
      const group = map.get(block.type) ?? new Set<Block>();
      group.add(block);
      map.set(block.type, group);
    }
    return map;
  };

  const primaryMap = groupByType(primaryBlocks);
  const secondaryMap = groupByType(secondaryBlocks);

  const tryToAdd = (blocks: Set<Block> | undefined): boolean => {
    if (!blocks) {
      return false;
    }
    for (const block of blocks) {
      if (!usedTitles.has(block.title) && !usedTypes.has(block.type)) {
        result.push(block);
        usedTypes.add(block.type);
        usedTitles.add(block.title);
        blocks.delete(block);
        return true;
      }
      blocks.delete(block);
    }
    return false;
  };

  for (const order of orders) {
    if (!tryToAdd(primaryMap.get(order))) {
      tryToAdd(secondaryMap.get(order));
    }
  }

  return result;
};

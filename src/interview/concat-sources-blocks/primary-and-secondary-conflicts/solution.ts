export interface Block {
  type: string;
  title: string;
  data: {
    source: 'primary' | 'secondary';
  };
}

/**
 * @param primaryBlocks - blocks from main source
 * @param secondaryBlocks - blocks from secondary sources
 * @param orders - requested types in order
 * @returns array of blocks, ordered by `orders`.
 * Primary blocks have priority over secondary blocks.
 * A secondary block is added only if its `type` and `title` do not conflict with any primary block.
 * Secondary blocks do not conflict with each other.
 * Types not listed in `orders` are excluded.
 */
export const concatSourcesBlocks = (
  primaryBlocks: Block[],
  secondaryBlocks: Block[],
  orders: string[],
): Block[] => {
  const result = [];
  const primaryTitles = new Set<string>();

  const groupByType = (blocks: Block[]): Map<string, Block> => {
    const map = new Map<string, Block>();
    for (const block of blocks) {
      map.set(block.type, block);
    }
    return map;
  };

  const primaryMap = groupByType(primaryBlocks);
  const secondaryMap = groupByType(secondaryBlocks);

  for (const block of primaryBlocks) {
    primaryTitles.add(block.title);
  }

  for (const order of orders) {
    const primaryBlock = primaryMap.get(order);
    if (primaryBlock) {
      result.push(primaryBlock);
      continue;
    }
    const secondaryBlock = secondaryMap.get(order);
    if (secondaryBlock && !primaryTitles.has(secondaryBlock.title)) {
      result.push(secondaryBlock);
    }
  }

  return result;
};

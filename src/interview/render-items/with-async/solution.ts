import { Item, RenderFn } from '../common';

/**
 *
 * @param items
 * @param render
 */
export const renderItems = async (
  items: Item[],
  render: RenderFn,
): Promise<void> => {
  const promises = items.map((item) => item.getData());
  const results = await Promise.all(promises);
  for (let i = 0; i < items.length; i++) {
    render({
      id: items[i].id,
      title: items[i].title,
      data: results[i],
    });
  }
  render({ type: 'finished' });
};

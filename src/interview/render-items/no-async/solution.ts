import { Item, RenderFn } from '../common';

/**
 *
 * @param items
 * @param render
 */
export const renderItems = (items: Item[], render: RenderFn): Promise<void> => {
  const promises = items.map((item) => item.getData());

  return Promise.all(promises)
    .then((results) => {
      for (let i = 0; i < items.length; i++) {
        render({
          id: items[i].id,
          title: items[i].title,
          data: results[i],
        });
      }
      render({ type: 'finished' });
    })
    .catch(() => {
      /* empty */
    });
};

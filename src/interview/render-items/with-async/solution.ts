import { Item, RenderFn } from '../common';

/**
 * Renders items with parallel data fetching and sequential rendering.
 *
 * All `getData()` calls are initiated simultaneously. Once data for an item is resolved,
 * it can be passed to `render()`, but **strictly in the order** of the `items` array.
 * That means item at index `i` will be rendered only after all items at indices `0...i-1`
 * have already been rendered.
 *
 * After **all** items have been rendered (regardless of their resolution time),
 * `render({ type: 'finished' })` is called, and the returned `Promise` resolves.
 *
 * @param {Item[]} items - Array of items to render. Each item must have:
 *   - `id` (`number|string`) – unique identifier,
 *   - `title` (`string`) – display title,
 *   - `getData` (`function(): Promise<object>`) – async function returning data.
 *
 * @param {function(object): void} render - Callback used for rendering.
 *   It is called twice:
 *   1. For each item – with `{ id, title, data }`, where `data` is the resolved value of `getData()`.
 *   2. At the very end – with `{ type: 'finished' }`.
 *
 * @returns {Promise<void>} A promise that resolves after `render({ type: 'finished' })` is called.
 *
 * @example
 * const items = [
 *   { id: 1, title: 'One', getData: () => fetch('/data/1').then(r => r.json()) },
 *   { id: 2, title: 'Two', getData: () => fetch('/data/2').then(r => r.json()) },
 * ];
 *
 * renderItems(items, (item) => {
 *   if (item.type === 'finished') {
 *     console.log('All items rendered');
 *   } else {
 *     console.log(`Rendering ${item.id}: ${item.title}`, item.data);
 *   }
 * }).then(() => console.log('Done'));
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

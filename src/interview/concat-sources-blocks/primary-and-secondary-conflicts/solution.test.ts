import { Block, concatSourcesBlocks } from './solution';

describe('Concat Sources Blocks: Primary And Secondary Conflicts | Interview | Testcases', () => {
  test('#1', () => {
    const primary: Block[] = [
      { type: 'спорт', title: 'Матч', data: { source: 'primary' } },
    ];
    const secondary: Block[] = [
      { type: 'спорт', title: 'Хоккей', data: { source: 'secondary' } },
      { type: 'культура', title: 'Матч', data: { source: 'secondary' } },
      { type: 'политика', title: 'Выборы', data: { source: 'secondary' } },
    ];
    const orders = ['политика', 'культура', 'спорт'];
    const expected = [
      { type: 'политика', title: 'Выборы', data: { source: 'secondary' } },
      { type: 'спорт', title: 'Матч', data: { source: 'primary' } },
    ];
    const output = concatSourcesBlocks(primary, secondary, orders);
    expect(output).toEqual(expected);
  });
});

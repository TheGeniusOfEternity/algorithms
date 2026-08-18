import { concatSourcesBlocks } from './solution';

describe('Concat Sources Blocks: Global Type & Title | Interview | Testcases', () => {
  test('#1', () => {
    const primary = [
      { type: 'спорт', title: 'Матч' },
      { type: 'экономика', title: 'Курс валют' },
    ];
    const secondary = [
      { type: 'политика', title: 'Главная новость' },
      { type: 'культура', title: 'Главная новость' },
    ];
    const orders = ['экономика', 'политика', 'культура', 'спорт'];
    const result = concatSourcesBlocks(primary, secondary, orders);
    const expected = [
      { type: 'экономика', title: 'Курс валют' },
      { type: 'политика', title: 'Главная новость' },
      { type: 'спорт', title: 'Матч' },
    ];
    expect(result).toEqual(expected);
  });
});

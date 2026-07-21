import './group-by';

describe('Task #23 | Group By | Testcases', () => {
  test('#1 Group By Id value', () => {
    const array = [{ id: '1' }, { id: '1' }, { id: '2' }];
    const fn = (item: { id: string }): string => {
      return item.id;
    };
    const expected = {
      '1': [{ id: '1' }, { id: '1' }],
      '2': [{ id: '2' }],
    };
    const output = array.groupBy(fn);
    expect(output).toEqual(expected);
  });

  test('#2 Group By Id First item', () => {
    const array = [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9],
    ];
    const fn = function (list: number[]): string {
      return String(list[0]);
    };
    const expected = {
      '1': [
        [1, 2, 3],
        [1, 3, 5],
        [1, 5, 9],
      ],
    };
    const output = array.groupBy(fn);
    expect(output).toEqual(expected);
  });

  test('#3 Group By N > 5', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const fn = function (n: number): string {
      return String(n > 5);
    };
    const expected = {
      true: [6, 7, 8, 9, 10],
      false: [1, 2, 3, 4, 5],
    };
    const output = array.groupBy(fn);
    expect(output).toEqual(expected);
  });
});

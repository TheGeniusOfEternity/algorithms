import { buildTree } from './solution';

describe('Build Tree: Sorted Replies (numeric)', () => {
  test('#1 Should sort children numerically: 1.2 before 1.10', () => {
    const messages = [
      { message: 'Root', pass: '1' },
      { message: 'Child 10', pass: '1.10' },
      { message: 'Child 2', pass: '1.2' },
    ];
    const result = buildTree(messages);
    expect(result[0].replies?.map((r) => r.message)).toEqual([
      'Child 2',
      'Child 10',
    ]);
  });

  test('#2 Should sort children on multiple levels', () => {
    const messages = [
      { message: 'Root', pass: '1' },
      { message: 'Child 10', pass: '1.10' },
      { message: 'Child 2', pass: '1.2' },
      { message: 'Child 1', pass: '1.1' },
      { message: 'Grandchild 10', pass: '1.1.10' },
      { message: 'Grandchild 2', pass: '1.1.2' },
    ];
    const result = buildTree(messages);
    const root = result[0];
    expect(root.replies?.map((r) => r.message)).toEqual([
      'Child 1',
      'Child 2',
      'Child 10',
    ]);
    const rootReplies = root.replies ?? [];
    expect(rootReplies[0].replies?.map((r) => r.message)).toEqual([
      'Grandchild 2',
      'Grandchild 10',
    ]);
  });

  test('#3 Should sort children when children have different depths', () => {
    const messages = [
      { message: 'Root', pass: '1' },
      { message: 'A', pass: '1.2' },
      { message: 'B', pass: '1.10' },
      { message: 'C', pass: '1.1' },
      { message: 'D', pass: '1.1.1' },
      { message: 'E', pass: '1.1.10' },
      { message: 'F', pass: '1.1.2' },
    ];
    const result = buildTree(messages);
    expect(result[0].replies?.map((r) => r.message)).toEqual(['C', 'A', 'B']);
    expect((result[0].replies ?? [])[0].replies?.map((r) => r.message)).toEqual(
      ['D', 'F', 'E'],
    );
  });

  test('#4 Should not sort roots (preserve original order)', () => {
    const messages = [
      { message: 'Root2', pass: '2' },
      { message: 'Root1', pass: '1' },
      { message: 'Child 10', pass: '1.10' },
      { message: 'Child 2', pass: '1.2' },
    ];
    const result = buildTree(messages);
    expect(result.map((r) => r.message)).toEqual(['Root2', 'Root1']);
    const root1 = result.find((r) => r.message === 'Root1');
    expect(root1?.replies?.map((r) => r.message)).toEqual([
      'Child 2',
      'Child 10',
    ]);
  });

  test('#5 Should sort children even if parent appears after children', () => {
    const messages = [
      { message: 'Child 10', pass: '1.10' },
      { message: 'Child 2', pass: '1.2' },
      { message: 'Root', pass: '1' },
    ];
    const result = buildTree(messages);
    expect(result[0].replies?.map((r) => r.message)).toEqual([
      'Child 2',
      'Child 10',
    ]);
  });

  test('#6 Should handle numeric sorting with more than two digits', () => {
    const messages = [
      { message: 'Root', pass: '1' },
      { message: 'Child 2', pass: '1.2' },
      { message: 'Child 10', pass: '1.10' },
      { message: 'Child 1', pass: '1.1' },
      { message: 'Child 100', pass: '1.100' },
    ];
    const result = buildTree(messages);
    expect(result[0].replies?.map((r) => r.message)).toEqual([
      'Child 1',
      'Child 2',
      'Child 10',
      'Child 100',
    ]);
  });
});

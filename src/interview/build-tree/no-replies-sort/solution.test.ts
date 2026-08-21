import { buildTree } from './solution';

describe('Build Tree: No replies Sort', () => {
  test('#1 Empty array', () => {
    expect(buildTree([])).toEqual([]);
  });

  test('#2 Single root', () => {
    const messages = [{ message: 'Root', pass: '1' }];
    expect(buildTree(messages)).toEqual([{ message: 'Root' }]);
  });

  test('#3 Multiple roots', () => {
    const messages = [
      { message: 'Root1', pass: '1' },
      { message: 'Root2', pass: '2' },
    ];
    expect(buildTree(messages)).toEqual([
      { message: 'Root1' },
      { message: 'Root2' },
    ]);
  });

  test('#4 Child before parent', () => {
    const messages = [
      { message: 'Child', pass: '1.1' },
      { message: 'Root', pass: '1' },
    ];
    expect(buildTree(messages)).toEqual([
      {
        message: 'Root',
        replies: [{ message: 'Child' }],
      },
    ]);
  });

  test('#5 Deep nesting', () => {
    const messages = [
      { message: 'Deep', pass: '1.2.3' },
      { message: 'Root', pass: '1' },
      { message: 'Child', pass: '1.2' },
    ];
    expect(buildTree(messages)).toEqual([
      {
        message: 'Root',
        replies: [
          {
            message: 'Child',
            replies: [{ message: 'Deep' }],
          },
        ],
      },
    ]);
  });

  test('#6 Multiple children', () => {
    const messages = [
      { message: 'Root', pass: '1' },
      { message: 'Child1', pass: '1.1' },
      { message: 'Child2', pass: '1.2' },
    ];
    expect(buildTree(messages)).toEqual([
      {
        message: 'Root',
        replies: [{ message: 'Child1' }, { message: 'Child2' }],
      },
    ]);
  });

  test('#7 Preserves order of first appearance', () => {
    const messages = [
      { message: 'Root', pass: '1' },
      { message: 'Child 10', pass: '1.10' },
      { message: 'Child 2', pass: '1.2' },
    ];
    expect(buildTree(messages)).toEqual([
      {
        message: 'Root',
        replies: [{ message: 'Child 10' }, { message: 'Child 2' }],
      },
    ]);
  });

  test('#8 Example from statement', () => {
    const messages = [
      { message: 'Deep', pass: '1.10.5' },
      { message: 'Root', pass: '1' },
      { message: 'Child 10', pass: '1.10' },
      { message: 'Child 2', pass: '1.2' },
    ];
    expect(buildTree(messages)).toEqual([
      {
        message: 'Root',
        replies: [
          {
            message: 'Child 10',
            replies: [{ message: 'Deep' }],
          },
          { message: 'Child 2' },
        ],
      },
    ]);
  });

  test('#9 Multiple roots with children', () => {
    const messages = [
      { message: 'Root1', pass: '1' },
      { message: 'Child1', pass: '1.1' },
      { message: 'Root2', pass: '2' },
      { message: 'Child2', pass: '2.1' },
    ];
    expect(buildTree(messages)).toEqual([
      {
        message: 'Root1',
        replies: [{ message: 'Child1' }],
      },
      {
        message: 'Root2',
        replies: [{ message: 'Child2' }],
      },
    ]);
  });

  test('#10 Depth > 3', () => {
    const messages = [
      { message: 'Level4', pass: '1.2.3.4' },
      { message: 'Root', pass: '1' },
      { message: 'Level2', pass: '1.2' },
      { message: 'Level3', pass: '1.2.3' },
    ];
    expect(buildTree(messages)).toEqual([
      {
        message: 'Root',
        replies: [
          {
            message: 'Level2',
            replies: [
              {
                message: 'Level3',
                replies: [{ message: 'Level4' }],
              },
            ],
          },
        ],
      },
    ]);
  });

  test('#11 all descendants before parent', () => {
    const messages = [
      { message: 'Grandchild', pass: '1.1.1' },
      { message: 'Child', pass: '1.1' },
      { message: 'Root', pass: '1' },
    ];
    expect(buildTree(messages)).toEqual([
      {
        message: 'Root',
        replies: [
          {
            message: 'Child',
            replies: [{ message: 'Grandchild' }],
          },
        ],
      },
    ]);
  });
});

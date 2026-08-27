import { buildCommentsTree } from './solution';

describe('Build Comments Tree | Interview | Testcases', () => {
  test('#1 Builds the comments tree from the example', () => {
    const comments = [
      { id: 1, text: 'A', level: 0 },
      { id: 2, text: 'B', level: 1 },
      { id: 3, text: 'C', level: 2 },
      { id: 4, text: 'D', level: 1 },
      { id: 5, text: 'E', level: 0 },
    ];

    expect(buildCommentsTree(comments)).toEqual([
      {
        id: 1,
        text: 'A',
        level: 0,
        children: [
          {
            id: 2,
            text: 'B',
            level: 1,
            children: [{ id: 3, text: 'C', level: 2 }],
          },
          { id: 4, text: 'D', level: 1 },
        ],
      },
      { id: 5, text: 'E', level: 0 },
    ]);
  });

  test('#2 Uses the last previous comment from the parent level', () => {
    const comments = [
      { id: 1, text: 'First root', level: 0 },
      { id: 2, text: 'First child', level: 1 },
      { id: 3, text: 'Second root', level: 0 },
      { id: 4, text: 'Second child', level: 1 },
      { id: 5, text: 'Second grandchild', level: 2 },
    ];

    expect(buildCommentsTree(comments)).toEqual([
      {
        id: 1,
        text: 'First root',
        level: 0,
        children: [{ id: 2, text: 'First child', level: 1 }],
      },
      {
        id: 3,
        text: 'Second root',
        level: 0,
        children: [
          {
            id: 4,
            text: 'Second child',
            level: 1,
            children: [{ id: 5, text: 'Second grandchild', level: 2 }],
          },
        ],
      },
    ]);
  });

  test('#3 Supports arbitrary nesting depth', () => {
    const comments = [
      { id: 1, text: 'Level 0', level: 0 },
      { id: 2, text: 'Level 1', level: 1 },
      { id: 3, text: 'Level 2', level: 2 },
      { id: 4, text: 'Level 3', level: 3 },
    ];

    expect(buildCommentsTree(comments)).toEqual([
      {
        id: 1,
        text: 'Level 0',
        level: 0,
        children: [
          {
            id: 2,
            text: 'Level 1',
            level: 1,
            children: [
              {
                id: 3,
                text: 'Level 2',
                level: 2,
                children: [{ id: 4, text: 'Level 3', level: 3 }],
              },
            ],
          },
        ],
      },
    ]);
  });

  test('#4 Does not mutate the source array or its comments', () => {
    const comments = [
      { id: 1, text: 'Root', level: 0 },
      { id: 2, text: 'Child', level: 1 },
    ];
    const originalComments = comments.map((comment) => ({ ...comment }));

    buildCommentsTree(comments);

    expect(comments).toEqual(originalComments);
  });

  test('#5 Returns an empty array for an empty input', () => {
    expect(buildCommentsTree([])).toEqual([]);
  });
});

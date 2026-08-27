import { findByType } from './solution';

describe('Find By Type | Interview | Testcases', () => {
  test('#1 Follow upside-down order', () => {
    const tree = {
      type: 'folder',
      name: 'root',
      children: [
        { type: 'file', name: 'file-1', children: [] },
        {
          type: 'folder',
          name: 'docs',
          children: [{ type: 'file', name: 'file-2', children: [] }],
        },
        { type: 'file', name: 'file-3', children: [] },
      ],
    };
    expect(findByType(tree, 'file').map((node) => node.name)).toEqual([
      'file-1',
      'file-2',
      'file-3',
    ]);
  });

  test('#2 No nodes of requested type', () => {
    const tree = {
      type: 'folder',
      name: 'root',
      children: [
        { type: 'folder', name: 'sub1', children: [] },
        { type: 'folder', name: 'sub2', children: [] },
      ],
    };
    expect(findByType(tree, 'file')).toEqual([]);
  });

  test('#3 All nodes are of requested type', () => {
    const tree = {
      type: 'file',
      name: 'root-file',
      children: [
        { type: 'file', name: 'file-a', children: [] },
        { type: 'file', name: 'file-b', children: [] },
      ],
    };
    expect(findByType(tree, 'file').map((node) => node.name)).toEqual([
      'root-file',
      'file-a',
      'file-b',
    ]);
  });

  test('#4 Deep nesting', () => {
    const tree = {
      type: 'folder',
      name: 'root',
      children: [
        {
          type: 'folder',
          name: 'level1',
          children: [
            {
              type: 'folder',
              name: 'level2',
              children: [{ type: 'file', name: 'deep-file', children: [] }],
            },
          ],
        },
      ],
    };
    expect(findByType(tree, 'file').map((node) => node.name)).toEqual([
      'deep-file',
    ]);
  });

  test('#5 Multiple matches in different branches', () => {
    const tree = {
      type: 'folder',
      name: 'root',
      children: [
        {
          type: 'folder',
          name: 'branch1',
          children: [
            { type: 'file', name: 'b1-f1', children: [] },
            { type: 'file', name: 'b1-f2', children: [] },
          ],
        },
        {
          type: 'folder',
          name: 'branch2',
          children: [{ type: 'file', name: 'b2-f1', children: [] }],
        },
      ],
    };
    expect(findByType(tree, 'file').map((node) => node.name)).toEqual([
      'b1-f1',
      'b1-f2',
      'b2-f1',
    ]);
  });

  test('#6 Search for type that appears only in root', () => {
    const tree = {
      type: 'special',
      name: 'root-special',
      children: [{ type: 'file', name: 'file-1', children: [] }],
    };
    expect(findByType(tree, 'special').map((node) => node.name)).toEqual([
      'root-special',
    ]);
  });
});

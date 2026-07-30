import { minWindow } from './solution';

describe('Minimum Window Substring | NeetCode | RoadMap | Testcases', () => {
  test('#1 Substring containing t characters', () => {
    const s = 'OUZODYXAZV';
    const t = 'XYZ';
    const expected = 'YXAZ';
    const output = minWindow(s, t);
    expect(output).toBe(expected);
  });

  test('#2 Exact t string', () => {
    const s = 'xyz';
    const t = 'xyz';
    const expected = 'xyz';
    const output = minWindow(s, t);
    expect(output).toBe(expected);
  });

  test('#3 No such substring', () => {
    const s = 'x';
    const t = 'xy';
    const expected = '';
    const output = minWindow(s, t);
    expect(output).toBe(expected);
  });
});

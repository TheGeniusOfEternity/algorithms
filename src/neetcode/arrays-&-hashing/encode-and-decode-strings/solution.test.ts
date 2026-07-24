import { Solution } from './solution';

describe('Encode And Decode Strings | NeetCode RoadMap | Testcases', () => {
  test('#1 Two strings', () => {
    const solution = new Solution();
    const input = ['Hello', 'World'];
    const encoded = solution.encode(input);
    const decoded = solution.decode(encoded);
    expect(decoded).toEqual(input);
  });

  test('#2 Empty string', () => {
    const solution = new Solution();
    const input = [''];
    const encoded = solution.encode(input);
    const decoded = solution.decode(encoded);
    expect(decoded).toEqual(input);
  });
});

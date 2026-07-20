import path from 'node:path';
import { runSolution } from '../../../utils/run-solution';

const solutionPath = `ts-node ${path.join(__dirname, 'the-map-of-hot-spots.ts')}`;

describe('Check example testcases', () => {
  test('Example #1', () => {
    const input =
      '3\n' +
      '3 3 4\n' +
      '5 1 0\n' +
      '2 8 4\n' +
      '0 3 6\n' +
      '1 1 2 2 3\n' +
      '1 1 2 2 9\n' +
      '1 1 3 3 5\n' +
      '1 1 3 3 0\n' +
      '2 2 3\n' +
      '4 4\n' +
      '4 1\n' +
      '1 1 2 2 4\n' +
      '1 1 2 2 5\n' +
      '2 2 2 2 1\n' +
      '1 4 2\n' +
      '7 7 7 7\n' +
      '1 1 1 4 7\n' +
      '1 2 1 3 8\n';
    const expected = '2\n' + '0\n' + '3\n' + '9\n' + '3\n' + '0\n' + '1\n' + '4\n' + '0';
    expect(runSolution(input, solutionPath)).toBe(expected);
  });
});

import path from 'node:path';
import { runSolution } from '../../../utils/run-solution';

const solutionPath = `ts-node ${path.join(__dirname, 'bike-rental.ts')}`;

describe('Check example testcases', () => {
  test('Example #1', () => {
    const input = '3 10\n0 5 2\n3 8 3\n6 10 1';
    const expected = '5';
    expect(runSolution(input, solutionPath)).toBe(expected);
  });

  test('Example #2', () => {
    const input = '2 4\n0 2 5\n2 4 7';
    const expected = '7';
    expect(runSolution(input, solutionPath)).toBe(expected);
  });
});

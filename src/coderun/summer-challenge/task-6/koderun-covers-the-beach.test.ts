import { runSolution } from '../../../utils/run-solution';
import path from 'node:path';

const solutionPath = `ts-node ${path.join(__dirname, 'koderun-covers-the-beach.ts')}`;

describe('Koderun Covers The Beach | Example Testcases', () => {
  test('Example #1', () => {
    const input = '2\n' + '4 2\n' + '3 5 1 2\n' + '4 4\n' + '1 1 1 1';
    const expected = '2 2 0 0 \n' + '4 4 4 4';
    const output = runSolution(input, solutionPath);
    expect(output).toBe(expected);
  });
});

import path from "node:path";
import { runSolution } from "../../../utils/run-solution";

const solutionPath = `ts-node ${path.join(__dirname, 'behind-the-scenes.ts')}`;

describe('Check example testcases', () => {
  test('Example #1', () => {
    const input =
      '5\n' +
      '3 4 5 1 2'
    ;
    const expected = '3';
    expect(runSolution(input, solutionPath)).toBe(expected);
  });

  test('Example #2', () => {
    const input =
      '5\n' +
      '5 4 3 2 1'
    ;
    const expected= '4'
    expect(runSolution(input, solutionPath)).toBe(expected);
  })
});
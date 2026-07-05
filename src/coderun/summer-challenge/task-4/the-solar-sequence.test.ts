import path from "node:path";
import { runSolution } from "../../../utils/run-solution";

const solutionPath = `ts-node ${path.join(__dirname, 'the-solar-sequence.ts')}`;

describe('Check example testcases', () => {
  test('Example #1', () => {
    const input =
      '1 1\n' +
      '1000000007\n' +
      '6\n' +
      '1 1 1\n' +
      '1 1 2\n' +
      '1 1 3\n' +
      '1 1 4\n' +
      '1 1 5\n' +
      '1 1 9'
    ;
    const expected =
      '1\n' +
      '2\n' +
      '3\n' +
      '5\n' +
      '8\n' +
      '55'
    ;
    expect(runSolution(input, solutionPath)).toBe(expected);
  });

  test('Example #2', () => {
    const input =
      '2 3\n' +
      '1000000007\n' +
      '5\n' +
      '1 2 1\n' +
      '1 2 2\n' +
      '1 2 3\n' +
      '1 2 4\n' +
      '1 2 5'
    ;
    const expected=
      '2\n' +
      '7\n' +
      '20\n' +
      '61\n' +
      '182'
    ;
    expect(runSolution(input, solutionPath)).toBe(expected);
  })

  test('Example #3', () => {
    const input =
      '5 7\n' +
      '1000000007\n' +
      '4\n' +
      '1 1 1\n' +
      '999999 500000 1\n' +
      '1 999999 1\n' +
      '500000 500001 1'
    ;
    const expected =
      '1\n' +
      '500000\n' +
      '999999\n' +
      '500001'
    ;
    expect(runSolution(input, solutionPath)).toBe(expected);
  });

  test('Example #4', () => {
    const input =
      '3 5\n' +
      '1000000007\n' +
      '4\n' +
      '1 2 2\n' +
      '10 20 2\n' +
      '100 200 2\n' +
      '1 1 2'
    ;
    const expected =
      '11\n' +
      '110\n' +
      '1100\n' +
      '8'
    ;
    expect(runSolution(input, solutionPath)).toBe(expected);
  });
});
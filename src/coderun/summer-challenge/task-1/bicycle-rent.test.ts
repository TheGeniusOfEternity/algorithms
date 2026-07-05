import { execSync } from 'child_process';
import path from "node:path";

const SOLUTION_CMD = `ts-node ${path.join(__dirname, 'bicycle-rent.ts')}`;

const testSolution = (input: string): string => {
  try {
    const output = execSync(SOLUTION_CMD, {
      input,
      encoding: 'utf-8',
      timeout: 10000,
      stdio: ['pipe', 'pipe', 'pipe'],
    }).replace(/\u001b\[[0-9;]*m/g, '');
    return output.trim();
  } catch (error: any) {
    return `ERROR: ${error.message}`;
  }
}

describe('Check example testcases', () => {
  test('Example #1', () => {
    const input = '3 10\n0 5 2\n3 8 3\n6 10 1';
    const expected = '5';
    expect(testSolution(input)).toBe(expected);
  });

  test('Example #2', () => {
    const input = '2 4\n0 2 5\n2 4 7';
    const expected = '7';
    expect(testSolution(input)).toBe(expected);
  })
});
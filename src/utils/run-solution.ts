import { execSync } from "child_process";

/**
 *
 * @param input - input data for solution
 * @param solutionPath - path to the solution file
 *
 * @returns output of the solution
 */
export const runSolution = (input: string, solutionPath: string) => {
  try {
    const output = execSync(solutionPath, {
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
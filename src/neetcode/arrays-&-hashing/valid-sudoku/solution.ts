/**
 * @param {character[][]} board
 * @return {boolean} `true` if the Sudoku board is valid, `false` otherwise
 */
export const isValidSudoku = (board: string[][]): boolean => {
  for (const line of board) {
    const numsCount = Array.from<number>({ length: board.length + 1 }).fill(0);
    for (const el of line) {
      const num = Number(el);
      if (!isNaN(num)) {
        numsCount[num]++;
        if (numsCount[num] > 1) {
          return false;
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    const numsCount = Array.from<number>({ length: board.length + 1 }).fill(0);
    for (let j = 0; j < board[i].length; j++) {
      const num = Number(board[j][i]);
      if (!isNaN(num)) {
        numsCount[num]++;
        if (numsCount[num] > 1) {
          return false;
        }
      }
    }
  }

  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board[i].length; j += 3) {
      const numsCount = Array.from<number>({ length: board.length + 1 }).fill(
        0,
      );
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const num = Number(board[i + k][j + l]);
          if (!isNaN(num)) {
            numsCount[num]++;
            if (numsCount[num] > 1) {
              return false;
            }
          }
        }
      }
    }
  }

  return true;
};

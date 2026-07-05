import fs from "node:fs";
import { parseNum } from "../../../utils/parse-num";

const input = fs.readFileSync(0, 'utf-8');
let output = "";
const idx = { val: 0 };

const t = parseNum(idx, input);

for (let i = 0; i < t; i++) {
  const n = parseNum(idx, input);
  const m = parseNum(idx, input);
  const q = parseNum(idx, input);

  const matrix: number[][] = [];
  for (let j = 0; j < n; j++) {
    const line = [];
    for (let k = 0; k < m; k++) {
      line.push(parseNum(idx, input));
    }
    matrix.push(line);
  }

  for (let j = 0; j < q; j++) {
    const r1 = parseNum(idx, input);
    const c1 = parseNum(idx, input);
    const r2 = parseNum(idx, input);
    const c2 = parseNum(idx, input);
    const x  = parseNum(idx, input);

    let count = 0;

    for (let k = r1; k <= r2; k++) {
      for (let l = c1; l <= c2; l++) {
        if (matrix[k - 1][l - 1] >= x) count++;
      }
    }

    output += `${count}\n`
    if (output.length > 65536) {
      process.stdout.write(output);
      output = '';
    }
  }
}

if (output.length > 0) process.stdout.write(output);

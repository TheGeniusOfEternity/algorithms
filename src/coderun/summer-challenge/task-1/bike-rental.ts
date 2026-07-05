import * as fs from "node:fs";
import { parseNum } from "../../../utils/parse-num";

const input = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 };

let sum: number = 0;
let mx: number = 0;

const n = parseNum(idx, input);
const t = parseNum(idx, input);

let used: number[] = Array(t + 1).fill(0);

for (let i = 0; i < n; i++) {
  const a = parseNum(idx, input);
  const f = parseNum(idx, input);
  const s = parseNum(idx, input);

  used[a] += s;
  used[f] -= s;
}

for (let i = 0; i < used.length; i++) {
  sum += used[i];
  mx = Math.max(mx, sum);
}

console.log(mx);
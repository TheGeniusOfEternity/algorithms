import * as fs from "node:fs";

const input = fs.readFileSync(0, 'utf-8');
const len = input.length;

let sum: number = 0;
let mx: number = 0;
let idx: number = 0;

const parseNum = (): number => {
  while (idx < len && (input[idx] === ' ' || input[idx] === '\n' || input[idx] === '\r')) idx++;
  let sign = 1;
  if (input[idx] === '-') { sign = -1; idx++; }
  let num = 0;
  while (idx < len && input[idx] >= '0' && input[idx] <= '9') {
    num = num * 10 + (input.charCodeAt(idx) - 48);
    idx++;
  }
  return num * sign;
}

const n = parseNum();
const t = parseNum();

let used: number[] = Array(t + 1).fill(0);

for (let i = 0; i < n; i++) {
  const a = parseNum();
  const f = parseNum();
  const s = parseNum();

  used[a] += s;
  used[f] -= s;
}

for (let i = 0; i < used.length; i++) {
  sum += used[i];
  mx = Math.max(mx, sum);
}

console.log(mx);
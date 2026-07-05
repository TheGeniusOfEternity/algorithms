import * as fs from "node:fs";
import { parseNum } from "../../../utils/parse-num";

let input: string | null = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 }

const a = parseNum(idx, input);
const b = parseNum(idx, input);
const m = parseNum(idx, input);
const q = parseNum(idx, input);

const fn = (x: number, y: number, n: number): number => {
  if (n === 1) return y;
  if (n === 0) return x;
  return a * fn(x, y, n - 1) + b * fn(x, y, n - 2);
}

let out = '';

for (let i = 0; i < q; i++) {
  const x = parseNum(idx, input);
  const y = parseNum(idx, input);
  const n = parseNum(idx, input);
  const f = fn(x, y, n);

  out += `${f % m}\n`;

  if (out.length > 65536) {
    process.stdout.write(out);
    out = '';
  }
}

input = null;

if (out.length > 0) process.stdout.write(out);
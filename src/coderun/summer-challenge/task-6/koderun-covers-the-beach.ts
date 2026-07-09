import fs from "node:fs";
import { parseNum } from "../../../utils/parse-num";

const input = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 };
const t = parseNum(idx, input);
let output = "";

for (let i = 0; i < t; i++) {
  const n = parseNum(idx, input);
  const k = parseNum(idx, input);
  const pref_sum: number[] = [0];
  const pref_xor: number[] = [0];

  for (let j = 0; j < n; j++) {
    const num = parseNum(idx, input);
    pref_sum[j + 1] = pref_sum[j] + num;
    pref_xor[j + 1] = pref_xor[j] ^ num;
  }

  for (let j = 0; j < n; j++) {
    let min = Infinity;
    for (let l = 0; l <= j; l++) {
      for (let r = j; r < n; r++) {
        const length = r - l + 1;
        if (length >= k) {
          const s = pref_sum[r + 1] - pref_sum[l];
          const x = pref_xor[r + 1] ^ pref_xor[l];
          const f = s - x;
          min = min > f ? f : min;
        }
      }
    }
    output += min + " ";
    if (output.length > 65536) {
      process.stdout.write(output);
      output = "";
    }
  }
  output += "\n"
  if (output.length > 65536) {
    process.stdout.write(output);
    output = "";
  }
}
if (output.length > 0) process.stdout.write(output);
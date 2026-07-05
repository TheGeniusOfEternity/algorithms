import * as fs from "node:fs";
import { parseNum } from "../../../utils/parse-num";

const input = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 }

const m = parseNum(idx, input);
const participants = new Map<number, number>();


for (let i = 0; i < m; i++) {
  const l = parseNum(idx, input);
  for (let j = 0; j < l; j++) {
    const k = parseNum(idx, input);
    const v = parseNum(idx, input);

    participants.set(k, v);
  }
}

const sorted = [...participants.entries()].sort((a, b) => a[0] - b[0]);

for (const [key, value] of sorted) {
  console.log(`${key} ${value}`);
}
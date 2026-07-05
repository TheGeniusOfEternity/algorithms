import fs from "node:fs";
import { parseNum } from "../../../utils/parse-num";

const input = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 };

let mx: number = 0;

const n = parseNum(idx, input);

const queue = new Set<number>();
const seen = new Set<number>([0]);

const tryToGo = (n: number) => {
  for (let i = 1; i <= n; i++) {
    if (!seen.has(i - 1)) return;
  }
  queue.delete(n);
  seen.add(n)
}

for (let i = 0; i < n; i++) {
  const num = parseNum(idx, input);
  queue.add(num);
  for (const x of queue) {
    tryToGo(x);
  }
  mx = Math.max(mx, queue.size);
}

console.log(mx);
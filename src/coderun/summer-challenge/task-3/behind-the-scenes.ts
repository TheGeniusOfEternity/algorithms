import fs from 'node:fs';
import { parseNum } from '../../../utils/parse-num';

const input = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 };
const n: number = parseNum(idx, input);

let nextExpected = 1;
let pendingSize = 0;
let mx = 0;

const capacity = n + 2;
const present = new Uint8Array(capacity);

for (let i = 0; i < n; i++) {
  const num = parseNum(idx, input);

  if (num === nextExpected) {
    nextExpected++;
    while (nextExpected < capacity && present[nextExpected] === 1) {
      present[nextExpected] = 0;
      pendingSize--;
      nextExpected++;
    }
  } else if (present[num] === 0) {
    present[num] = 1;
    pendingSize++;
  }
  mx = Math.max(mx, pendingSize);
}

// eslint-disable-next-line no-console
console.log(mx);

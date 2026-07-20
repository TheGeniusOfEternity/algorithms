import fs from 'node:fs';
import { parseNum } from '../../../utils/parse-num';
import { parseBigInt } from '../../../utils/parse-bigint';

const input = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 };
const t = parseNum(idx, input);
let output = '';

for (let i = 0; i < t; i++) {
  const n = parseNum(idx, input);
  const k = parseNum(idx, input);
  const pref_sum = new BigInt64Array(n + 1);
  const pref_xor = new BigInt64Array(n + 1);

  for (let j = 0; j < n; j++) {
    const num = parseBigInt(idx, input);
    pref_sum[j + 1] = pref_sum[j] + num;
    pref_xor[j + 1] = pref_xor[j] ^ num;
  }

  const V_len = n - k + 1;
  const V = new BigInt64Array(V_len);
  for (let l = 0; l < V_len; l++) {
    const r = l + k - 1;
    const s = pref_sum[r + 1] - pref_sum[l];
    const x = pref_xor[r + 1] ^ pref_xor[l];
    V[l] = s - x;
  }

  const deque = new Int32Array(V_len + 1);
  let head = 0,
    tail = 0;
  let current_R = -1;

  for (let i = 0; i < n; i++) {
    const L = Math.max(0, i - k + 1);
    const R = Math.min(i, n - k);

    while (current_R < R) {
      current_R++;
      while (tail > head && V[deque[tail - 1]] >= V[current_R]) {
        tail--;
      }
      deque[tail++] = current_R;
    }
    while (head < tail && deque[head] < L) {
      head++;
    }

    output += V[deque[head]].toString() + ' ';
    if (output.length > 65536) {
      process.stdout.write(output);
      output = '';
    }
  }
  output += '\n';
  if (output.length > 65536) {
    process.stdout.write(output);
    output = '';
  }
}
if (output.length > 0) {
  process.stdout.write(output);
}

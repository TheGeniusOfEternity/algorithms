import * as fs from 'node:fs';
import { parseNum } from '../../../utils/parse-num';
import { parseBigInt } from '../../../utils/parse-bigint';

const input = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 };

const a = parseBigInt(idx, input);
const b = parseBigInt(idx, input);
const m = parseBigInt(idx, input);
const q = parseNum(idx, input);

const powers: [bigint, bigint, bigint, bigint][] = [];
powers.push([a, b, 1n, 0n]);

for (let k = 1; k < 64; k++) {
  const prev = powers[k - 1];
  const p00 = (prev[0] * prev[0] + prev[1] * prev[2]) % m;
  const p01 = (prev[0] * prev[1] + prev[1] * prev[3]) % m;
  const p10 = (prev[2] * prev[0] + prev[3] * prev[2]) % m;
  const p11 = (prev[2] * prev[1] + prev[3] * prev[3]) % m;
  powers.push([p00, p01, p10, p11]);
}

let out = '';

for (let i = 0; i < q; i++) {
  const x = parseBigInt(idx, input);
  const y = parseBigInt(idx, input);
  const n = parseBigInt(idx, input);

  let result: bigint;
  if (n === 0n) {
    result = x;
  } else {
    let exp = n - 1n;
    let resMat: [bigint, bigint, bigint, bigint] = [1n, 0n, 0n, 1n];
    let bit = 0;

    while (exp > 0n) {
      if (exp & 1n) {
        const A2 = resMat;
        const B2 = powers[bit];
        resMat = [
          (A2[0] * B2[0] + A2[1] * B2[2]) % m,
          (A2[0] * B2[1] + A2[1] * B2[3]) % m,
          (A2[2] * B2[0] + A2[3] * B2[2]) % m,
          (A2[2] * B2[1] + A2[3] * B2[3]) % m,
        ];
      }
      exp >>= 1n;
      bit++;
    }
    result = (resMat[0] * y + resMat[1] * x) % m;
  }

  out += `${result.toString()}\n`;

  if (out.length > 65536) {
    process.stdout.write(out);
    out = '';
  }
}

if (out.length > 0) {
  process.stdout.write(out);
}

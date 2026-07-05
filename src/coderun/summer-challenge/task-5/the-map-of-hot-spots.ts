import fs from "node:fs";
import { parseNum } from "../../../utils/parse-num";

const input = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 };
const t = parseNum(idx, input);

class Fenwick2D {
  tree: Int32Array;
  n: number;
  m: number;

  constructor(n: number, m: number) {
    this.n = n;
    this.m = m;
    this.tree = new Int32Array((n + 1) * (m + 1));
  }

  add(r: number, c: number, delta: number) {
    for (let i = r; i <= this.n; i += i & -i) {
      const rowOffset = i * (this.m + 1);
      for (let j = c; j <= this.m; j += j & -j) {
        this.tree[rowOffset + j] += delta;
      }
    }
  }

  sum(r: number, c: number): number {
    let s = 0;
    for (let i = r; i > 0; i -= i & -i) {
      const rowOffset = i * (this.m + 1);
      for (let j = c; j > 0; j -= j & -j) {
        s += this.tree[rowOffset + j];
      }
    }
    return s;
  }

  query(r1: number, c1: number, r2: number, c2: number): number {
    return this.sum(r2, c2) - this.sum(r1 - 1, c2) - this.sum(r2, c1 - 1) + this.sum(r1 - 1, c1 - 1);
  }
}

for (let i = 0; i < t; i++) {
  const n = parseNum(idx, input);
  const m = parseNum(idx, input);
  const q = parseNum(idx, input);

  const elements = new Int32Array(n * m * 3);
  let elIdx = 0;
  for (let r = 1; r <= n; r++) {
    for (let c = 1; c <= m; c++) {
      elements[elIdx++] = parseNum(idx, input);
      elements[elIdx++] = r;
      elements[elIdx++] = c;
    }
  }

  const queries = new Int32Array(q * 6);
  let qIdx = 0;
  for (let j = 0; j < q; j++) {
    const r1 = parseNum(idx, input);
    const c1 = parseNum(idx, input);
    const r2 = parseNum(idx, input);
    const c2 = parseNum(idx, input);
    queries[qIdx++] = parseNum(idx, input);
    queries[qIdx++] = r1;
    queries[qIdx++] = c1;
    queries[qIdx++] = r2;
    queries[qIdx++] = c2;
    queries[qIdx++] = j;
  }

  const elIndices = new Int32Array(n * m);
  for (let j = 0; j < n * m; j++) elIndices[j] = j;
  elIndices.sort((a, b) => elements[b * 3] - elements[a * 3]);

  const qIndices = new Int32Array(q);
  for (let j = 0; j < q; j++) qIndices[j] = j;
  qIndices.sort((a, b) => queries[b * 6] - queries[a * 6]);

  const fenwick = new Fenwick2D(n, m);
  const answers = new Int32Array(q);

  let currentEl = 0;

  for (let j = 0; j < q; j++) {
    const queryIndex = qIndices[j];
    const base = queryIndex * 6;
    const x = queries[base];
    const r1 = queries[base + 1];
    const c1 = queries[base + 2];
    const r2 = queries[base + 3];
    const c2 = queries[base + 4];
    const originalIndex = queries[base + 5];

    while (currentEl < n * m) {
      const elBase = elIndices[currentEl] * 3;
      const val = elements[elBase];
      if (val >= x) {
        const r = elements[elBase + 1];
        const c = elements[elBase + 2];
        fenwick.add(r, c, 1);
        currentEl++;
      } else {
        break;
      }
    }

    answers[originalIndex] = fenwick.query(r1, c1, r2, c2);
  }

  let output = "";
  for (let j = 0; j < q; j++) {
    output += answers[j] + "\n";
    if (output.length > 65536) {
      process.stdout.write(output);
      output = "";
    }
  }
  if (output.length > 0) process.stdout.write(output);
}
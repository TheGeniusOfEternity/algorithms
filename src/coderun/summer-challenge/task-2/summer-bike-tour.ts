import * as fs from 'node:fs';
import { parseNum } from '../../../utils/parse-num';

let input: string | null = fs.readFileSync(0, 'utf-8');
const idx = { val: 0 };

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

input = null;

const keysArray = new Int32Array(participants.keys());
const sortedKeys = keysArray.sort();

let out = '';
for (const key of sortedKeys) {
  out += `${key.toString()} ${participants.get(key)?.toString() ?? ''}\n`;

  if (out.length > 65536) {
    process.stdout.write(out);
    out = '';
  }
}
if (out.length > 0) {
  process.stdout.write(out);
}

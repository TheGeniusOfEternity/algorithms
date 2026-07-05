import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n: number, t: number;
let sum: number = 0, mx: number = 0, lineNumber: number = 0;
let used: number[];

rl.on('line', (input) => {
  if (lineNumber === 0) {
    [n, t] = input.split(' ').map(Number);
    used = new Array(t + 1).fill(0);
    lineNumber++;
  } else {
    const [a, f, s] = input.split(' ').map(Number);
    used[a] += s;
    used[f] -= s;
    lineNumber++;
    if (lineNumber === n + 1) {
      rl.close();
      for (const use of used) {
        sum += use;
        mx = Math.max(mx, sum);
      }
      console.log(mx)
    }
  }
});
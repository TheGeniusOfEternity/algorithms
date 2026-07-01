export const solution = (arr: number[]) => {
  const unsorted = [...arr];
  const sorted = [];
  while (unsorted.length > 0) {
    let smallest = Infinity;
    let idx = -1;
    for (let i = 0; i < unsorted.length; i++) {
      const num = unsorted[i]
      if (smallest > num) {
        idx = i;
        smallest = num
      }
    }
    sorted.push(unsorted.splice(idx, 1)[0]);
  }
  return sorted;
}

const data: number[] = [];
for (let i = 0; i < 100; i++) data.push(Math.round(Math.random() * i))
console.log(solution(data))
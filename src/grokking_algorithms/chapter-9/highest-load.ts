// Backpack load algorithm implementation (via dynamic programming)

interface Loot {
  name: string;
  capacity: number;
  cost: number
}

/**
 *
 * @param capacity - max weight of the backpack, only integer
 * @param loot - thing available to steal, each thing has name, capacity (only integer) and cost
 *
 * @returns max cost of load backpack
 */
export const highestLoad = (capacity: number, loot: Loot[]) => {
  const matrix: number[][] = [];
  for (let i = 0; i < loot.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < capacity; j++) {
      if (i === 0) matrix[i][j] = loot[i].capacity > j + 1 ? 0 : loot[i].cost;
      else if (loot[i].capacity > j + 1) {
        matrix[i][j] = matrix[i - 1][j];
      }
      else {
        const remaining = j - loot[i].capacity;
        const withItem = loot[i].cost + (remaining >= 0 ? matrix[i - 1][remaining] : 0);
        matrix[i][j] = Math.max(matrix[i - 1][j], withItem);
      }
    }
  }
  return matrix[loot.length - 1][capacity - 1];
}

const loot: Loot[] = [
  {
    name: "Guitar",
    capacity: 1,
    cost: 1500
  },
  {
    name: "Laptop",
    capacity: 3,
    cost: 2000
  },
  {
    name: "Recorder",
    capacity: 4,
    cost: 3000
  },
  {
    name: "Iphone",
    capacity: 1,
    cost: 2000
  },
]
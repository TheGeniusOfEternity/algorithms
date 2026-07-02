// Dijkstra’s algorithm implementation

type Node = Record<string, number>
type Graph = Record<string, Node>

/**
 *
 * @param graph - relations between points (edges) with weights
 * @param costs - (mutated) current known costs from start to each node; missing keys are treated as Infinity
 * @param parents - (mutated) current known the cheapest parent for each node (used to rebuild the path)
 *
 * @returns tuple: [path, totalCost], where path is null if "end" is unreachable from "start"
 */
export const dijkstraAlgorithm = (graph: Graph, costs: Record<string, number>, parents: Record<string, string>) => {
  const processed = new Set<string>();
  const findCheapest = (costs: Record<string, number>): string | null => {
    let cheapest = Infinity;
    let nodeName = null;
    for (const key in costs) {
      const cost = costs[key];
      if (cheapest > cost && !processed.has(key)) {
        cheapest = cost;
        nodeName = key;
      }
    }
    return nodeName;
  }
  const findWay = (node: string, path: string[] = []) => {
    path.unshift(node);
    if (node === "start") return path;
    const parent = parents[node];
    if (!parent || parent === "-") return null;
    return findWay(parent, path);
  }

  let node = findCheapest(costs);
  while (node !== null) {
    const cost = costs[node];
    const neighbours = graph[node];
    for (const neighbour in neighbours) {
      const newCost = cost + neighbours[neighbour];
      if (newCost < costs[neighbour]) {
        costs[neighbour] = newCost;
        parents[neighbour] = node;
      }
    }
    processed.add(node);
    node = findCheapest(costs);
  }
  return [findWay("end"), costs["end"]];
}

const gr: Graph = {
  start: {a: 6, b: 2},
  a: { end: 1},
  b: { a: 3, end: 5},
  end: {}
}

const costs: Record<string, number> = {
  a: 6,
  b: 2,
  end: Infinity
}

const parents: Record<string, string> = {
  a: "start",
  b: "start",
  end: "-"
}
// Dijkstra’s algorithm implementation

type Node = Record<string, number>
type Graph = Record<string, Node>

/**
 *
 * @param graph - relations with different points (edges) with weights
 * @param costs - weights between start point and current point
 * @param parents - connections of current point
 *
 * @returns array of points sequence of the cheapest path from start to end and its weight
 */
export const dijkstraAlgorithm = (graph: Graph, costs: Record<string, number>, parents: Record<string, string>) => {
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
    return findWay(parents[node], path);
  }

  let node = findCheapest(costs);
  while (node !== null) {
    const cost = costs[node];
    const neighbours = graph[node];
    for (const neighbour in neighbours) {
      const new_cost = cost + neighbours[neighbour];
      if (new_cost < costs[neighbour]) {
        costs[neighbour] = new_cost;
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

const processed = new Set<string>();
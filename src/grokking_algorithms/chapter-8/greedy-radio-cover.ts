// Greedy algorithm implementation

type Stations = Record<string, Set<string>>;
type States = Set<string>;

/**
 *
 * @param states - states that need to be covered
 * @param stations - stations with list of covered states
 *
 * @returns "good" combination of stations for full cover
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const coverRadio = (states: States, stations: Stations): Set<string> => {
  const finalStations = new Set<string>();
  const remaining: States = new Set(states);
  while (remaining.size > 0) {
    let bestStation = '';
    let bestCovered: States = new Set();
    for (const station in stations) {
      const covered: States = new Set([...stations[station]].filter((s) => remaining.has(s)));
      if (covered.size > bestCovered.size) {
        bestCovered = covered;
        bestStation = station;
      }
    }
    for (const state of remaining) {
      if (bestCovered.has(state)) {
        remaining.delete(state);
      }
    }
    finalStations.add(bestStation);
  }
  return finalStations;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const states: States = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stations: Stations = {
  kone: new Set(['id', 'nv', 'ut']),
  ktwo: new Set(['wa', 'id', 'mt']),
  kthree: new Set(['or', 'nv', 'ca']),
  kfour: new Set(['nv', 'ut']),
  kfive: new Set(['ca', 'az']),
};

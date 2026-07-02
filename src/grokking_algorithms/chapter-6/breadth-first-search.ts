// BFS algorithm implementation

type PeopleRelations = Record<string, string[]>

export const findSeller = (graph: PeopleRelations) => {
  const queue: string[] = [...graph["you"]];
  const checked: Set<string> = new Set();
  while (queue.length !== 0) {
    const person = queue.shift()!
    if (person.endsWith("m")) return person;
    if (checked.has(person)) continue
    queue.push(...graph[person]!)
    checked.add(person)
  }
}

const gr: PeopleRelations = {};
gr["you"] = ["alice", "bob", "claire"];
gr["bob"] = ["anuj", "peggy"];
gr["alice"] = ["peggy"];
gr["claire"] = ["thom", "jonny"];
gr["anuj"] = [];
gr["peggy"] = [];
gr["thom"] = [];
gr["jonny"] = [];
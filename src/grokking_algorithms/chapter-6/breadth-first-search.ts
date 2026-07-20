// BFS algorithm implementation

type PeopleRelations = Record<string, string[]>;

export const findSeller = (graph: PeopleRelations): string | undefined => {
  const queue: string[] = [...graph.you];
  const checked = new Set<string>();
  while (queue.length !== 0) {
    const person = queue.shift();
    if (person !== undefined) {
      if (person.endsWith('m')) {
        return person;
      }
      if (checked.has(person)) {
        continue;
      }
      queue.push(...graph[person]);
      checked.add(person);
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const gr: PeopleRelations = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
};

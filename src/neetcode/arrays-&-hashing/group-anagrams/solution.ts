/**
 * @param strs - array of strings
 * @returns all anagrams together into sublists
 */
export const groupAnagrams = (strs: string[]): string[][] => {
  const groupsMap = new Map<string, string[]>();
  strs.forEach((str) => {
    const count: number[] = new Array<number>(26).fill(0);
    for (const c of str) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    const key = count.join(',');
    const group = groupsMap.get(key) ?? [];
    group.push(str);
    groupsMap.set(key, group);
  });

  const groups = [];
  for (const group of groupsMap.values()) {
    groups.push(group);
  }
  groups.sort((a, b) => a.length - b.length);
  return groups;
};

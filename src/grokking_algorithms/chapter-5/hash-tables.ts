// Example usages of HashTables (implemented by Map)

// Price list
const prices = new Map<string, number>();

prices.set('apple', 0.67);
prices.set('orange', 0.55);

// Vote list
const votes = new Map<string, boolean>();

export const checkVote = (name: string): void => {
  const isVoted = votes.get(name);
  if (isVoted !== undefined) {
    // eslint-disable-next-line no-console
    console.log(`You have already voted, ${name}!`);
    return;
  }
  votes.set(name, true);
  // eslint-disable-next-line no-console
  console.log(`Thanks for your vote, ${name}!`);
};

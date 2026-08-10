/**
 * @param {number[]} piles - an integer array where `piles[i]` is the number of bananas in the `ith` pile.
 * @param {number} h - an integer which represents the number of hours you have to eat all the bananas.
 * @return {number} - the minimum integer `k` such that you can eat all the bananas within `h` hours.
 * Each hour, you may choose a pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas,
 * you may finish eating the pile, but you can not eat from another pile in the same hour.
 */
export const minEatingSpeed = (piles: number[], h: number): number => {
  let start = 1;
  let end = Math.max(...piles) + 1;
  let res = end;

  while (start < end) {
    const speed = Math.floor((start + end) / 2);
    let totalTime = 0;
    for (const p of piles) {
      totalTime += Math.ceil(p / speed);
    }
    if (totalTime <= h) {
      res = speed;
      end = speed;
    } else {
      start = speed + 1;
    }
  }

  return res;
};

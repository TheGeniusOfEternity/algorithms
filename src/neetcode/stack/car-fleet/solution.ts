/**
 * @param {number} target - The position of the destination, in miles.
 * @param {number[]} position - array of integers, `position[i]` is the position of the `ith car` (in miles).
 * @param {number[]} speed - array of integers, `speed[i]` is the speed of the `ith car` (in miles per hour).
 * @return {number} the number of `different car fleet`s that will arrive at the destination.
 */
export const carFleet = (
  target: number,
  position: number[],
  speed: number[],
): number => {
  const cars = position.map((p, i) => [p, speed[i]]);
  const stack: number[] = [];
  cars
    .sort((a, b) => b[0] - a[0])
    .forEach(([pos, s]) => {
      const time = (target - pos) / s;
      if (time > (stack[stack.length - 1] || 0)) {
        stack.push(time);
      }
    });
  return stack.length;
};

// K-near neighbours algorithm implementation

/**
 *
 * @param ratings - ratings of other users
 * @param userRatings - ratings of the current user
 * @param k - amount of closest neighbours, must be less than amount of users
 *
 * @returns array of k closest neighbours in format { name, distance }
 */
export const findClosestNeighbours = (ratings: Map<string, Record<string, number>>, userRatings: Record<string, number>, k: number = 1) => {
  let closest : { name: string, distance: number }[] = [];
  for (const [name, rates] of ratings) {
    let sum = 0
    let common = 0;
    for (const rate in rates) {
      const userRate = userRatings[rate];
      if (userRate === undefined) continue;
      sum += (rates[rate] - userRate) ** 2;
      common++;
    }
    if (common === 0) continue;
    closest.push({ name, distance: Math.sqrt(sum) })
  }
  closest.sort((a, b) => a.distance - b.distance);
  closest.splice(k, closest.length - k);
  return closest;
}

/**
 *
 * @param movies - list of movies
 * @param users - list of users
 *
 * @returns random generated ratings
 */
export const generateRatings = (movies: Set<string>, users: Set<string>): Map<string, Record<string, number>> => {
  const userRatings: Map<string, Record<string, number>> = new Map();
  for (const user of users) {
    const ratings: Record<string, number> = {};
    for (const movie of movies) {
      ratings[movie] = Math.round(Math.random() * 10)
    }
    userRatings.set(user, ratings)
  }
  return userRatings;
}

const movies = new Set([
  "Matrix: Revolution", "Iron Man", "Transformers: Movie",
  "The Green Mile", "The Green Book"
]);

const users: Set<string> = new Set([
  "John", "Mary", "Steve", "Alex", "Sam"
]);



// https://leetcode.com/problems/destination-city/

/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  const set = new Set(paths.map((path) => path[0]));

  for (const path of paths) {
    if (!set.has(path[1])) return path[1];
  }
}

console.log(
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo']
  ])
);
// "Sao Paulo"
console.log(
  destCity([
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'A']
  ])
);
// "A"
console.log(destCity([['A', 'Z']]));
// "Z"

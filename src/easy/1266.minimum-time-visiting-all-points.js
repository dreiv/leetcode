// https://leetcode.com/problems/minimum-time-visiting-all-points/

/**
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points) {
  let visitTime = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];

    visitTime += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  }

  return visitTime;
}

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0]
  ])
);
// 7
console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2]
  ])
);
// 5

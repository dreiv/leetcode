// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
function oddCells(n, m, indices) {
  const [rows, cols] = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  for (const [r, c] of indices) {
    [rows[r]++, cols[c]++];
  }

  const rowOdds = rows.filter((n) => 1 === n % 2).length;
  const rowEvens = rows.length - rowOdds;
  const colOdds = cols.filter((n) => 1 === n % 2).length;
  const colEvens = cols.length - colOdds;

  return rowOdds * colEvens + rowEvens * colOdds;
}

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1]
  ])
);
// 6
console.log(
  oddCells(2, 2, [
    [1, 1],
    [0, 0]
  ])
);
// 0

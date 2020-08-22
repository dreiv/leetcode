// https://leetcode.com/problems/xor-operation-in-an-array/

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
function xorOperation(n, start) {
  let xor = start;

  for (i = 1; i < n; i++) {
    xor ^= start + 2 * i;
  }

  return xor;
}

console.log(xorOperation(5, 0));
// 8
console.log(xorOperation(4, 3));
// 8
console.log(xorOperation(1, 7));
// 7
console.log(xorOperation(10, 5));
// 2

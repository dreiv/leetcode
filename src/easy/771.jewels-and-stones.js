// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
  const jewels = new Set(J);
  let count = 0;

  for (char of S) {
    if (jewels.has(char)) {
      count++;
    }
  }

  return count;
}

console.log(numJewelsInStones('aA', 'aAAbbbb'));
// 3
console.log(numJewelsInStones('z', 'ZZ'));
// 0

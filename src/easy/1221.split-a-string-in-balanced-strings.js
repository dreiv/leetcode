// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
  let balance = 0;
  let result = 0;

  for (char of s) {
    balance += char === 'R' ? 1 : -1;

    if (balance === 0) {
      result++;
    }
  }

  return result;
}

console.log(balancedStringSplit('RLRRLLRLRL'));
// 4
console.log(balancedStringSplit('RLLLLRRRLR'));
// 3
console.log(balancedStringSplit('LLLLRRRR'));
// 1
console.log(balancedStringSplit('RLRRRLLRLL'));
// 2

// https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
  // count how many times each number appears.
  const map = nums.reduce((m, n) => m.set(n, (m.get(n) || 0) + 1), new Map());
  // use `n(n-1)/2` to get how many combinations are possible
  return [...map.values()].reduce((num, n) => num + (n * (n - 1)) / 2, 0);
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
// 4
console.log(numIdenticalPairs([1, 1, 1, 1]));
// 6
console.log(numIdenticalPairs([1, 2, 3]));
// 0

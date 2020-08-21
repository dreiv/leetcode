// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const map = new Map(
    nums
      .slice()
      .sort((a, b) => b - a)
      .map((num, index) => [num, nums.length - index - 1])
  );

  return nums.map((num) => map.get(num));
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
// [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
// [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
// [0,0,0,0]

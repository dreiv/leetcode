// https://leetcode.com/problems/create-target-array-in-the-given-order/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
function createTargetArray(nums, index) {
  const result = [];

  for (const i in nums) {
    result.splice(index[i], 0, nums[i]);
  }

  return result;
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
// [0,4,1,3,2]
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
// [0,1,2,3,4]
console.log(createTargetArray([1], [0]));
// [1]

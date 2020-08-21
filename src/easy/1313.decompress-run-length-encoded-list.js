// https://leetcode.com/problems/decompress-run-length-encoded-list/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    result.push(...Array.from({ length: nums[i] }, () => nums[i + 1]));
  }

  return result;
}

console.log(decompressRLElist([1, 2, 3, 4]));
// [2,4,4,4]
console.log(decompressRLElist([1, 1, 2, 3]));
// [1,3,3]

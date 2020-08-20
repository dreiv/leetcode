// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
  return nums.reduce((arr, num, idx) => {
    if (idx === 0) {
      arr.push(num);
    } else {
      arr.push(num + arr[idx - 1]);
    }
    return arr;
  }, []);
}

console.log(runningSum([1, 2, 3, 4]));
// [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1]));
// [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1]));
// [3,4,6,16,17]

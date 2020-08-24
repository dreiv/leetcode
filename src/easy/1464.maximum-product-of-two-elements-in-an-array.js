// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let max1 = 0;
  let max2 = 0;
  for (num of nums) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }

  return (max1 - 1) * (max2 - 1);
}

console.log(maxProduct([3, 4, 5, 2]));
// 12
console.log(maxProduct([1, 5, 4, 5]));
// 16
console.log(maxProduct([10, 2, 5, 2]));
// 36

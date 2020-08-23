// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
  let result = 0;

  for (const num of nums) {
    if (~~Math.log10(num) % 2 === 1) {
      result++;
    }
  }

  return result;
}

console.log(findNumbers([12, 345, 2, 6, 7896]));
// 2
console.log(findNumbers([555, 901, 482, 1771]));
// 2

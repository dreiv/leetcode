/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
  const secondHalf = nums.splice(n);

  return nums.reduce((sum, curr, i) => {
    return sum.concat(curr, secondHalf[i]);
  }, []);
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
// [2,3,5,4,1,7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
// [1,4,2,3,3,2,4,1]
console.log(shuffle([1, 1, 2, 2], 2));
// [1,2,1,2]

// https://leetcode.com/problems/count-good-triplets/

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue;

      for (let k = j + 1; k < arr.length; k++) {
        if (Math.abs(arr[j] - arr[k]) > b) continue;
        if (Math.abs(arr[k] - arr[i]) <= c) count++;
      }
    }
  }

  return count;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
// 4
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1));
// 0

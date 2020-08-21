// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

/**
 * @param {number} n
 * @return {number}
 */
function subtractProductAndSum(n) {
  let product = 1;
  let sum = 0;

  while (n > 0) {
    const mod = n % 10;
    product *= mod;
    sum += mod;

    n = Math.floor(n / 10);
  }

  return product - sum;
}

console.log(subtractProductAndSum(234));
// 15
console.log(subtractProductAndSum(4421));
// 21

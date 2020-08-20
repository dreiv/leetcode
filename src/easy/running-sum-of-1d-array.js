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
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

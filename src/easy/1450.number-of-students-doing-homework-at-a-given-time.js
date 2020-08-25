// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
function busyStudent(startTime, endTime, queryTime) {
  return startTime.filter(
    (time, index) => queryTime >= time && queryTime <= endTime[index]
  ).length;
}

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
// 1
console.log(busyStudent([4], [4], 4));
// 1
console.log(busyStudent([4], [4], 5));
// 0
console.log(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7));
// 0
console.log(
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10],
    5
  )
);
// 5

// https://leetcode.com/problems/shuffle-string/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(s, indices) {
  let restored = new Array(indices.length);
  for (let i = 0; i < s.length; i++) {
    restored[indices[i]] = s[i];
  }

  return restored.join('');
}

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
// leetcode
console.log(restoreString('abc', [0, 1, 2]));
// abc
console.log(restoreString('aiohn', [3, 1, 4, 2, 0]));
// nihao
console.log(restoreString('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5]));
// arigatou
console.log(restoreString('art', [1, 0, 2]));
// rat

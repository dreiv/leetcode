// https://leetcode.com/problems/to-lower-case/

let alphaObj = {
  A: 'a',
  B: 'b',
  C: 'c',
  D: 'd',
  E: 'e',
  F: 'f',
  G: 'g',
  H: 'h',
  I: 'i',
  J: 'j',
  K: 'k',
  L: 'l',
  M: 'm',
  N: 'n',
  O: 'o',
  P: 'p',
  Q: 'q',
  R: 'r',
  S: 's',
  T: 't',
  U: 'u',
  V: 'v',
  W: 'w',
  X: 'x',
  Y: 'y',
  Z: 'z'
};

/**
 * @param {string} str
 * @return {string}
 */
function toLowerCase(str) {
  let result = '';

  for (let char of str) {
    result += alphaObj[char] || char;
  }

  return result;
}

console.log(toLowerCase('Hello'));
// "hello"
console.log(toLowerCase('here'));
// "here"
console.log(toLowerCase('LOVELY'));
// "lovely"

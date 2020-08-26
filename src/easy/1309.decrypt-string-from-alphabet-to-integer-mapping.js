// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

let map = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
  10: 'j',
  11: 'k',
  12: 'l',
  13: 'm',
  14: 'n',
  15: 'o',
  16: 'p',
  17: 'q',
  18: 'r',
  19: 's',
  20: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z'
};

/**
 * @param {string} s
 * @return {string}
 */
function freqAlphabets(s) {
  return s.match(/\d{2}(?=#)|\d/g).reduce((acc, num) => acc + map[num], '');
}

console.log(freqAlphabets('10#11#12'));
// "jkab"
console.log(freqAlphabets('1326#'));
// "acz"
console.log(freqAlphabets('25#'));
// "y"
console.log(
  freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#')
);
// "abcdefghijklmnopqrstuvwxyz"

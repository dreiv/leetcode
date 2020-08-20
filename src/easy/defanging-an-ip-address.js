/**
 * @param {string} address
 * @return {string}
 */
function defangIPaddr(address) {
  let result = '';

  for (let char of address) {
    if (char === '.') {
      result += '[.]';
    } else {
      result += char;
    }
  }

  return result;
}

console.log(defangIPaddr('1.1.1.1'));
// "1[.]1[.]1[.]1"
console.log(defangIPaddr('255.100.50.0'));
// "255[.]100[.]50[.]0"

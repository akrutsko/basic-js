const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayFromNumber = String(n).split('');

  const index = arrayFromNumber.findIndex((n, i, arr) => n < arr[i + 1]);
  arrayFromNumber.splice(index, 1);

  return +arrayFromNumber.join('');
}

module.exports = {
  deleteDigit,
};

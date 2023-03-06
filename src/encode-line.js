const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const matches = str.match(/(.)\1*/g);
  return matches ? matches.map(s => (s.length > 1 ? s.length : '') + s[0]).join('') : '';
}

module.exports = {
  encodeLine
};

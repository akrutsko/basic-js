const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
    additionSeparator = options.additionSeparator || '|';

    if (options.additionRepeatTimes) {
      str += new Array(options.additionRepeatTimes).fill(options.addition).join(additionSeparator);
    } else {
      str += options.addition;
    }
  }

  if (options.repeatTimes) {
    separator = options.separator || '+';
    str = new Array(options.repeatTimes).fill(str).join(separator);
  }

  return str;
}

module.exports = {
  repeater
};

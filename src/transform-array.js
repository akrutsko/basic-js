const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);

  const transformedArray = [];
  let isKeeped = true;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        arr[i + 1] && i++;
        isKeeped = false;
        break;
      case '--discard-prev':
        arr[i - 1] && isKeeped && transformedArray.pop();
        break;
      case '--double-next':
        arr[i + 1] && transformedArray.push(arr[i + 1]);
        break;
      case '--double-prev':
        arr[i - 1] && isKeeped && transformedArray.push(arr[i - 1]);
        break;
      default:
        transformedArray.push(arr[i]);
        isKeeped = true;
    }
  }

  return transformedArray;
}

module.exports = {
  transform
};

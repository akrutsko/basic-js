const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mines = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const topLeft = matrix[i - 1]?.[j - 1] || 0;
      const top = matrix[i - 1]?.[j] || 0;
      const topRight = matrix[i - 1]?.[j + 1] || 0;

      const middleLeft = matrix[i]?.[j - 1] || 0;
      const middleRight = matrix[i]?.[j + 1] || 0;

      const bottomLeft = matrix[i + 1]?.[j - 1] || 0;
      const bottom = matrix[i + 1]?.[j] || 0;
      const bottomRight = matrix[i + 1]?.[j + 1] || 0;

      row.push(topLeft + top + topRight + middleLeft + middleRight + bottomLeft + bottom + bottomRight);
    }
    mines.push(row);
  }
  return mines;
}

module.exports = {
  minesweeper
};

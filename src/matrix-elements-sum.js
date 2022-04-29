const { NotImplementedError } = require('../extensions/index.js');
const { countCats } = require('./count-cats.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  const data = matrix[0].length;

  for (let j = 0; j < data; j++) {
    for (let i = 0; i < matrix.length; i++) {
      const number = matrix[i][j];
      if (number === 0) {
        break;
      } else {
        count += number;
      }
    }
  }
  return count;
}

module.exports = {
  getMatrixElementsSum
};

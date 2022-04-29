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
  if (!str) return str;

  const array = str.split('');
  let result = [];
  let count = 1;

  array.forEach((elem, index) => {
    if (elem === array[index + 1]) {
      count++;
    } else {
      result.push(`${count > 1 ? count : ''}${elem}`);
      count = 1;
    }
  });
  return result.join('');
}

module.exports = {
  encodeLine
};

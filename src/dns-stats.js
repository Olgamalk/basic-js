const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');

  if (!Array.isArray(domains)) {
    return false;
  }

  const result = {};

  for (let i = 0; i < domains.length; i++) {
    let key = '';
    let array = domains[i].split('.').reverse();

    for (let j = 0; j < array.length; j++) {
      key = key + '.' + array[j];
      if (Object.keys(result).includes(key)) {
        result[key] = result[key] + 1;
      } else {
        result[key] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};

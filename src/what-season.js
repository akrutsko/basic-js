const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  try {
    Number(date)
  } catch {
    throw new Error('Invalid date!');
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const month = new Date(date).getMonth() + 1;

  return (seasons[Math.floor(month / 3)] || seasons[0]);
}

module.exports = {
  getSeason
};

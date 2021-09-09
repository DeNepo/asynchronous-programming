'use strict';

/**
 * takes an array of strings and concatenates them into a list
 * @param {string[]} arrOfStrings - an array of strings
 * @returns {string} the array entries combined into a list
 */
const listify = (arrOfStrings = []) => {
  if (!Array.isArray(arrOfStrings)) {
    throw new TypeError('arrOfStrings is not an array');
  }
  if (arrOfStrings.some((item) => typeof item !== 'string')) {
    throw new TypeError('arrOfStrings is not an array of strings');
  }

  let lines = [];
  for (const string of arrOfStrings) {
    lines.push(`- ${string}`);
  }
  const list = lines.join('\n');
  return list;

  // or ...
  // return arrOfStrings.map(string => `- ${string}`).join('\n');
};

module.exports = listify;

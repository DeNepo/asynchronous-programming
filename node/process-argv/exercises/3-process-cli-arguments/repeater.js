'use strict';

/**
 * repeats a string a certain number of times
 * a new line is added between each repetition
 *
 * @param {string} text - the text to repeat
 * @param {number} repeats - the number of times to repeat the text
 * @returns {string} the input text repeated
 */
const repeater = (text = '', repeats = 0) => {
  if (typeof text !== 'string') {
    throw new TypeError('text is not a string');
  }
  if (typeof repeats !== 'number') {
    throw new TypeError('repeats is not a number');
  }
  if (Number.isNaN(repeats)) {
    throw new TypeError('repeats is NaN');
  }

  const arrayOfTexts = [];
  for (let i = 0; i < repeats; i++) {
    arrayOfTexts.push(text);
  }

  const repeated = arrayOfTexts.join('\n');

  return repeated;
};

module.exports = repeater;

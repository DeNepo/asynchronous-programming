'use strict';

/**
 * a function that returns a logging function for studying and debugging async code
 * @param {string} title - a string to use as an identifier in the logs
 * @param {number} count - where to start counting logs
 * @param {Date} start - the time when a new logger is created
 * @returns {Function} a new logger function:
 *  counts how many times it's been called
 *  logs extra info about timing and callstack
 */
const labeledLogger = (title, count = 0, start = new Date()) => {
  const fullTime = `${start.toLocaleTimeString().split(' ')[0]}.${String(
    start.getMilliseconds()
  ).padStart(3, '0')}`;

  const initialLabel = `--- ${title}, log ${count}: ${fullTime} ---`;
  console.log('%c' + initialLabel, 'font-weight: bold;');

  const closedLogger = function() {
    const now = new Date();

    const logLabel = `--- ${title}, log ${++count}: + ${now.getTime() -
      start.getTime()} ms ---`;
    console.log('%c' + logLabel, 'font-weight: bold;');

    if (arguments.length > 0) {
      console.log(...arguments);
    }
    console.log('\n');
  };

  return closedLogger;
};

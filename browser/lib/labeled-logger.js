/**
 * Formats a Date instance into a string representing the hours, minutes, seconds, milliseconds
 * ->  hours:minutes:seconds.milliseconds
 *
 * @param {Date} [dateInstance=new Date()] - A date instance to format into a time string.
 * @returns {string} The provided date formatted time string.
 */
const formatTime = (dateInstance = new Date()) => {
  const hourMinuteSecond = dateInstance.toLocaleTimeString().split(' ')[0];
  const milliseconds = String(dateInstance.getMilliseconds()).padStart(3, '0');
  return `${hourMinuteSecond}.${milliseconds}`;
};

/**
 * a function that returns a logging function for studying and debugging async code
 *
 * @param {Array} [initialMessages] - An array of things to log when this function is called.
 * @returns {Function} a new logger function
 */
export const labeledLogger = (...initialMessages) => {
  const start = Date.now();
  const startDate = new Date(start);
  let count = 0;

  const startTime = formatTime(startDate);
  const initialLabel = `--- log ${count}: ${startTime} ---`;
  console.groupCollapsed('%c' + initialLabel, 'font-weight: bold;');
  console.trace('callstack:');
  console.groupEnd();
  if (initialMessages.length > 0) {
    console.log(...initialMessages);
  }
  console.log('\n');

  /**
   * Logs a time-stamped message with a collapsed callstack.
   * Any arguments provided by the user will be logged under the label.
   *
   * @param  {...any} args - User-provided values to log.
   * @returns {void}
   */
  const closedLogger = (...args) => {
    const now = new Date();
    const delay = now.getTime() - startDate.getTime();
    const logLabel = `--- log ${++count}: + ${delay} ms ---`;

    console.groupCollapsed('%c' + logLabel, 'font-weight: bold;');
    console.trace(`${startTime} -> ${formatTime(now)}`);
    console.groupEnd();
    if (args.length > 0) {
      console.log(...args);
    }
    console.log('\n');
  };

  return closedLogger;
};

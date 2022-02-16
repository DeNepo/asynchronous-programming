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
 * @returns {Object} A new object with the same methods as `console`, but each one labeled.
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
   * Creates a labeled logger function with a specified print procedure.
   *
   * @param {Function} [out=console.log] - The output function for user-provided arguments.
   * @returns {Function} A closed logger that labels output with timing and callstack info.
   */
  const loggerFactory = (out = console.log) => {
    /**
     * Logs a time-stamped message with a collapsed callstack.
     * Any arguments provided by the user will be logged under the label.
     *
     * @param  {...any} args - User-provided values to log.
     * @returns {void}
     */
    const logger = (...args) => {
      const now = new Date();
      const delay = now.getTime() - startDate.getTime();
      const logLabel = `--- ${++count}, ${out.name}: + ${delay} ms ---`;

      console.groupCollapsed('%c' + logLabel, 'font-weight: bold;');
      console.trace(`${startTime} -> ${formatTime(now)}`);
      console.groupEnd();
      if (args.length > 0) {
        out(...args);
      }
      console.log('\n');
    };

    return logger;
  };

  return Object.entries(console).reduce(
    (all, next) => ({ ...all, [next[0]]: loggerFactory(next[1]) }),
    {},
  );
};

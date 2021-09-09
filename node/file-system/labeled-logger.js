'use strict';

const labeledLogger = (start = Date.now()) => {
  const logger = (logId, ...logTheseThings) => {
    console.log(
      `\nlog ${logId}, ${Date.now() - start} ms:\n`,
      ...logTheseThings,
    );
  };
  return logger;
};

module.exports = labeledLogger;

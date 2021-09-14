'use strict';

console.log('BEGIN ./other-file');

console.log('module.exports (before) -', module.exports);

// you can export functions too, .exports is just a property on an object!
const logMessage = (message) => {
  console.trace(message);
};

module.exports = logMessage;

console.log('module.exports (after) -', module.exports);

console.log('END ./other-file.js ');

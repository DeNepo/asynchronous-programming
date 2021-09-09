'use strict';

console.log('BEGIN ./other-file.js');

console.log('module.exports (before) -', module.exports);

// you can assign an object to .exports
//  this is a common way to package related functions
module.exports = {
  a: 1,
  b: 2,
};

console.log('module.exports (after) -', module.exports);

console.log('END ./other-file.js ');

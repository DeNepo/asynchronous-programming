'use strict';

console.log('BEGIN ./other-file.js');

// module is an object available in every node script
// like all objects, it can have properties
//  it has these properties by default
console.log('module properties -', Object.keys(module));

// the most important property for now is .exports
//  anything you attach to this property can be required into other files
console.log('module.exports (before) -', module.exports);

// reassign the .exports property
module.exports = 'hello';

console.log('module.exports (after) -', module.exports);

console.log('END ./other-file.js ');

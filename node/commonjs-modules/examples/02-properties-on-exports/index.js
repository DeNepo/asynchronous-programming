'use strict';

console.log('BEGIN ./index.js');

const fromOtherFile = require('./other-file.js');

console.log('fromOtherFile -', fromOtherFile);
console.log('fromOtherFile.b -', fromOtherFile.b);

console.log('END ./index.js');

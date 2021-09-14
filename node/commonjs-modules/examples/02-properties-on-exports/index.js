'use strict';

console.log('BEGIN ./index');

const fromOtherFile = require('./other-file');

console.log('fromOtherFile -', fromOtherFile);
console.log('fromOtherFile.b -', fromOtherFile.b);

console.log('END ./index');

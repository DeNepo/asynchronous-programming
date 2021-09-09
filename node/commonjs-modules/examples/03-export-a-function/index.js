'use strict';

console.log('BEGIN ./index.js');

const fromOtherFile = require('./other-file.js');

console.log('fromOtherFile -', fromOtherFile);
fromOtherFile(1);
fromOtherFile(2);
fromOtherFile(3);

console.log('END ./index.js');

'use strict';

console.log('BEGIN ./index');

const fromOtherFile = require('./other-file');

console.log('fromOtherFile -', fromOtherFile);
fromOtherFile(1);
fromOtherFile(2);
fromOtherFile(3);

console.log('END ./index');

'use strict';

console.log('BEGIN ./index');

const sayHello = require('./other-file');
// const fromOtherFile = require('./other-file');

// console.log('fromOtherFile -', fromOtherFile);

// console.log('END ./index');

sayHello('hello from the other file');

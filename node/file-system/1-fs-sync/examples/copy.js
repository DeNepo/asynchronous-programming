'use strict';
debugger;

/*
  you should call this file with two CLI arguments:
  - the file name to read from
  - the file name to write to
*/

// require built-in dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// main script
const log = labeledLogger(Date.now());

const sourceFile = path.join(__dirname, process.argv[2]);
log(1, 'copy from:', sourceFile);

const targetFile = path.join(__dirname, process.argv[3]);
log(2, 'to:', targetFile);

log(3, '...');
fs.copyFileSync(sourceFile, targetFile);

log(4, 'done!');

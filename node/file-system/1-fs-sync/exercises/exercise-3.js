'use strict';
debugger;

/* helpful examples
  read-text.js
  write-text.js
*/

// require built-in dependencies
const assert = require('assert');
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// declare constants
const FILE_PATH = path.join(__dirname, 'file.txt');

// --- main script ---
const log = labeledLogger(Date.now());

const newFileContents = '*[]*';
log(1, newFileContents);

log(2, 'writing file ...');
fs._(_, _, _);

log(3, 'reading file ...');
const fileContent = fs._(_, _, _);

assert.strictEqual(fileContent, newFileContents);
log(4, 'PASS!');

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
const FILE_PATH = path.join(__dirname, 'file.json');

// --- main script ---
const log = labeledLogger(Date.now());

const objectToSave = {
  todoText: '1234',
  completed: true,
};
log(1, objectToSave);

const stringToSave = _;
log(2, stringToSave);

log(3, 'writing file ...');

_;

log(4, 'reading file ...');
const fileText = _;

log(5, fileText);
assert.strictEqual(fileText, stringToSave);

const parsedFileContents = _;
log(6, parsedFileContents);
assert.deepStrictEqual(parsedFileContents, objectToSave);

log(7, 'PASS!');

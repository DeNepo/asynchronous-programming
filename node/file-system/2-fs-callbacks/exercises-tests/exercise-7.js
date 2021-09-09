'use strict';
debugger;

/* helpful examples
  refactor-sync-to-async.js
  sync-vs-async.js
  append-text.js
  copy.js
*/

// require built-in dependencies
const assert = require('assert');
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// declare constants
const EXERCISE_NAME = path.basename(__filename);
const SOURCE_PATH = path.join(__dirname, 'file.txt');
const SOURCE_TEXT = fs.readFileSync(SOURCE_PATH, 'utf-8');

// --- main script ---
const log = labeledLogger(Date.now());

log(0, `--- ${EXERCISE_NAME} ---`);

// log initial values
log(0.1, SOURCE_PATH);
log(0.2, SOURCE_TEXT);

// there are two steps to this exercise
// 1. fill in the blanks to pass (sync)
// 2. refactor to asynchronous

log(1, 'appending to file ...');
fs._(_, _);

log(2, 'appending to file ...');
fs._(_, _);

log(1, 'reading file ...');
const newText = fs._(SOURCE_PATH, _);
log(4, newText);

assert.strictEqual(newText, ORIGINAL_TEXT + ORIGINAL_TEXT + ORIGINAL_TEXT);
log(5, 'PASS!');

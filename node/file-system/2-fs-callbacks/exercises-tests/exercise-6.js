'use strict';
debugger;

/* helpful examples
  refactor-sync-to-async.js
  sync-vs-async.js
  read-text.js
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
const SOURCE_PATH = path.join(__dirname, 'file.json');
const SOURCE_TEXT = fs.readFileSync(SOURCE_PATH, 'utf-8');

// --- main script ---
const log = labeledLogger(Date.now());

log(0, `--- ${EXERCISE_NAME} ---`);

// log initial values
log(0.1, SOURCE_PATH);
log(0.2, SOURCE_TEXT);

const targetFilePath = path.join(__dirname, process.argv[2]);
log(1, targetFilePath);

// refactor the code below to be asynchronous

log(2, 'copying file ...');
fs.copyFileSync(SOURCE_PATH, targetFilePath);

log(3, 'reading target file ...');
const copiedContent = fs.readFileSync(targetFilePath, 'utf-8');

log(4, copiedContent);

assert.strictEqual(copiedContent, SOURCE_TEXT);
log(5, 'PASS!');

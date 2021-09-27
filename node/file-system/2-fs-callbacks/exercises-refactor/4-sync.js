'use strict';
debugger;

// require built-in dependencies
const assert = require('assert');
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// declare constants
const EXERCISE_NAME = path.basename(__filename);

// --- main script ---
const log = labeledLogger(Date.now());

log(0, `--- ${EXERCISE_NAME} ---`);

const filePath = path.join(__dirname, process.argv[2]);
log(1, filePath);

const toAppend = process.argv[3];
log(2, toAppend);

const numberOfTimes = Number(process.argv[4]);
log(3, numberOfTimes);

log(4, 'reading old contents ...');
const oldContents = fs.readFileSync(filePath, 'utf-8');

for (let i = 1; i <= numberOfTimes; i++) {
  log(4 + i, `appending ...`);
  fs.appendFileSync(filePath, toAppend);
}

log(numberOfTimes + 5, 'reading new contents ...');
const newContents = fs.readFileSync(filePath, 'utf-8');

log(numberOfTimes + 6, 'asserting file contents ...');
const expectedContents = oldContents + toAppend.repeat(numberOfTimes);
assert.strictEqual(newContents, expectedContents);

log(numberOfTimes + 7, 'PASS!');

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

const fileName1 = process.argv[2];
const filePath1 = path.join(__dirname, fileName1);
log(1, filePath1);

const fileName2 = process.argv[3];
const filePath2 = path.join(__dirname, fileName2);
log(2, filePath2);

const yourGuess = process.argv[4] === 'true' ? true : false;
log(3, yourGuess);

log(4, `reading ${fileName1} ...`);
const fileContents1 = fs.readFileSync(filePath1, 'utf-8');

log(5, `reading ${fileName2} ...`);
const fileContents2 = fs.readFileSync(filePath2, 'utf-8');

log(6, 'comparing file contents ...');
const expected = fileContents1 === fileContents2;

log(7, 'asserting your guess ...');
assert.strictEqual(yourGuess, expected);

log(8, 'PASS!');

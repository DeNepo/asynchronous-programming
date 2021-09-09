'use strict';
debugger;

// require built-in dependencies
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const util = require('util');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// promisify fs functions

// declare constants
const EXERCISE_NAME = path.basename(__filename);

// --- main script ---
const log = labeledLogger(Date.now());

log(0, `--- ${EXERCISE_NAME} ---`);

const fileName = process.argv[2];
const filePath = path.join(__dirname, '..', fileName);
log(1, filePath);

const newFileContent = process.argv[3];
log(2, newFileContent);

log(3, `writing ${fileName} ...`);
fs.writeFile(filePath, newFileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  log(4, `reading ${fileName} ...`);
  fs.readFile(filePath, `utf-8`, (err, fileContent) => {
    if (err) {
      console.error(err);
      return;
    }

    log(5, `asserting ...`);
    assert.strictEqual(fileContent, newFileContent);

    log(6, 'PASS!');
  });
});

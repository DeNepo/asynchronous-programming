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
const EXERCISE_NAME = path.basename(__filename);
const FILE_PATH = path.join(__dirname, 'file.txt');

// --- main script ---
const log = labeledLogger(Date.now());

log(0, `--- ${EXERCISE_NAME} ---`);

const newFileContents = '*[]*';
log(1, newFileContents);

const writeFileCallback = (err) => {
  if (err) {
    log(3, err);
    return;
  }

  const readFileCallback = (err, fileContent) => {
    if (err) {
      log(4, err);
      return;
    }

    assert.strictEqual(fileContent, newFileContents);
    log(4, 'PASS!');
  };

  fs._(_, _, _);
  log(3, 'reading file ...');
};

fs._(_, _, _);
log(2, 'writing file ...');

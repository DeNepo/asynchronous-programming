'use strict';
debugger;

// require built-in dependencies
const assert = require('assert');
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// declare constants
const EXAMPLE_NAME = path.basename(__filename);
const FILE_PATH = path.join(__dirname, '..', 'file-1.txt');

// --- main script ---
const log = labeledLogger(Date.now());

log(0, `--- ${EXAMPLE_NAME} ---`);

// --- old school with callbacks ---

const newFileContents = 'written by example with callbacks';
log(1, newFileContents);

const writeFileCallback = (err) => {
  if (err) {
    console.error(err);
    return;
  }

  const readFileCallback = (err, fileContent) => {
    if (err) {
      console.error(err);
      return;
    }
    log(4, 'asserting ...');
    assert.strictEqual(fileContent, newFileContents);
    log(5, 'PASS!');
  };

  log(3, 'reading file ...');
  fs.readFile(FILE_PATH, 'utf-8', readFileCallback);
};

log(2, 'writing file ...');
fs.writeFile(FILE_PATH, newFileContents, writeFileCallback);

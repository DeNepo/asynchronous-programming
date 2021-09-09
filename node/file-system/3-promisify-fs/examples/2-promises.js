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
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

// declare constants
const EXAMPLE_NAME = path.basename(__filename);
const FILE_PATH = path.join(__dirname, '..', 'file-1.txt');

// --- main script ---
const log = labeledLogger(Date.now());

log(0, `--- ${EXAMPLE_NAME} ---`);

// --- refactored to promises ---

const newFileContents = 'written by example with promises';
log(1, newFileContents);

log(2, 'writing file ...');
writeFilePromise(FILE_PATH, newFileContents)
  .then(() => {
    log(3, 'reading file ...');
    return readFilePromise(FILE_PATH, 'utf-8');
  })
  .then((fileContent) => {
    log(4, 'asserting ...');
    assert.strictEqual(fileContent, newFileContents);
    log(5, 'PASS!');
  })
  .catch((err) => console.error(err));

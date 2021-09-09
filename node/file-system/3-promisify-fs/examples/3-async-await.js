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

// --- refactored to async/await ---

const newFileContents = 'written by example with async/await';
log(1, newFileContents);

const writeReadAssert = async (content = '') => {
  try {
    log(2, 'writing file ...');
    await writeFilePromise(FILE_PATH, content);

    log(3, 'reading file ...');
    const fileContent = await readFilePromise(FILE_PATH, 'utf-8');

    log(4, 'asserting ...');
    assert.strictEqual(fileContent, newFileContents);

    log(5, 'PASS!');
  } catch (err) {
    console.error(err);
  }
};

writeReadAssert(newFileContents);

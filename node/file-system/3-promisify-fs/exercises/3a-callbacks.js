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

const fileName1 = process.argv[2];
const fileToRead = path.join(__dirname, '..', fileName1);
log(1, fileToRead);

const fileName2 = process.argv[3];
const fileToAppend = path.join(__dirname, '..', fileName2);
log(2, fileToAppend);

log(3, `reading original contents from ${fileName2} ...`);
fs.readFile(fileToAppend, `utf-8`, (err, oldContents) => {
  if (err) {
    console.error(err);
    return;
  }

  log(4, `reading from ${fileName1} ...`);
  fs.readFile(fileToRead, `utf-8`, (err, contentToAppend) => {
    if (err) {
      console.error(err);
      return;
    }

    log(5, `writing to ${fileName2} ...`);
    fs.appendFile(fileToAppend, contentToAppend, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      log(6, `reading from ${fileName2} ...`);
      fs.readFile(fileToAppend, `utf-8`, (err, newContent) => {
        if (err) {
          console.error(err);
          return;
        }

        log(7, `asserting ...`);
        assert.strictEqual(newContent, oldContents + contentToAppend);

        log(8, 'PASS!');
      });
    });
  });
});

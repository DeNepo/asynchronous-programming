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
const sourcePath = path.join(__dirname, '..', fileName1);
log(1, sourcePath);

const fileName2 = process.argv[3];
const targetPath = path.join(__dirname, '..', fileName2);
log(2, targetPath);

log(3, `reading original contents from ${fileName1} ...`);
fs.readFile(sourcePath, `utf-8`, (err, originalSourceContent) => {
  if (err) {
    console.error(err);
    return;
  }

  log(4, `copying to ${fileName2} ...`);
  fs.copyFile(sourcePath, targetPath, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    log(5, `reading ${fileName1} ...`);
    fs.readFile(sourcePath, `utf-8`, (err, sourceContent) => {
      if (err) {
        console.error(err);
        return;
      }

      log(6, `asserting ${fileName1} ...`);
      assert.strictEqual(sourceContent, originalSourceContent);

      log(7, `reading ${fileName2} ...`);
      fs.readFile(targetPath, `utf-8`, (err, targetContent) => {
        if (err) {
          console.error(err);
          return;
        }

        log(8, `asserting ${fileName2} ...`);
        assert.strictEqual(targetContent, originalSourceContent);

        log(9, 'PASS!');
      });
    });
  });
});

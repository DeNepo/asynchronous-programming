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
const filePath1 = path.join(__dirname, '..', fileName1);
log(1, filePath1);

const fileName2 = process.argv[3];
const filePath2 = path.join(__dirname, '..', fileName2);
log(2, filePath2);

log(3, `reading ${fileName1} ...`);
fs.readFile(filePath1, 'utf-8', (err, oldFile1) => {
  if (err) {
    console.error(err);
    return;
  }

  log(4, `reading ${fileName2} ...`);
  fs.readFile(filePath2, 'utf-8', (err, oldFile2) => {
    if (err) {
      console.error(err);
      return;
    }

    log(5, `writing ${fileName1} ...`);
    fs.writeFile(filePath1, oldFile2, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      log(6, `writing ${fileName2} ...`);
      fs.writeFile(filePath2, oldFile1, (err) => {
        if (err) {
          console.error(err);
          return;
        }

        log(7, `reading ${fileName1} ...`);
        fs.readFile(filePath1, 'utf-8', (err, newFile1) => {
          if (err) {
            console.error(err);
            return;
          }

          log(8, 'asserting new file 1 contents ...');
          assert.strictEqual(newFile1, oldFile2);

          log(9, `reading ${fileName2} ...`);
          fs.readFile(filePath2, 'utf-8', (err, newFile2) => {
            if (err) {
              console.error(err);
              return;
            }

            log(10, 'asserting new file 2 contents ...');
            assert.strictEqual(newFile2, oldFile1);

            log(11, 'PASS!');
          });
        });
      });
    });
  });
});

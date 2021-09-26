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

log(3, `reading ${fileName1} ...`);

const readFile1 = (err, fileContents1) => {
  log(4, `reading ${fileName2} ...`);

  const readFile2 = (err, fileContents2) => {
    log(5, 'comparing file contents ...');

    const fileOneIsLonger = fileContents1.length > fileContents2.length;
    if (fileOneIsLonger) {
      log(6, `writing to ${fileName2} ...`);
      const writeFileIf = () => {
        log(7, `reading ${fileName2} ...`);
        const newFileRead2 = (newFileContents2) => {
          log(8, 'asserting ...');
          assert.strictEqual(fileContents1, newFileContents2);
        };
        fs.readFile(filePath2, 'utf-8', newFileRead2);
      };
      fs.writeFile(filePath2, fileContents1, writeFileIf);
    } else {
      log(6, `writing to ${fileName1} ...`);
      const writeFileElse = () => {
        log(7, `reading ${fileName1} ...`);
        const newFileRead1 = (newFileContents1) => {
          log(8, 'asserting ...');
          assert.strictEqual(fileContents2, newFileContents1);
        };
        fs.readFile(filePath1, 'utf-8', newFileRead1);
      };
      fs.writeFile(filePath1, fileContents2, writeFileElse);
    }

    log(9, 'PASS!');
  };
  fs.readFile(filePath2, 'utf-8', readFile2);
};
fs.readFile(filePath1, 'utf-8', readFile1);

'use strict';
debugger;

// require built-in dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// declare constants
const FILE_PATH = path.join(__dirname, 'file.txt');

// --- main script ---
const log = labeledLogger(Date.now());

// synchronous

const newSyncFileContents = '*[]*';
log(1, newSyncFileContents);

fs.writeFileSync(FILE_PATH, newSyncFileContents);

const currentFileContents = fs.readFileSync(FILE_PATH, 'utf-8');
log(2, currentFileContents);

// asynchronous

const newAsyncFileContents = '[**]';
log(3, newAsyncFileContents);

fs.writeFile(FILE_PATH, newAsyncFileContents, (err) => {
  if (err) {
    log(5, err);
    return;
  }

  fs.readFile(FILE_PATH, 'utf-8', (err, asyncFileContents) => {
    if (err) {
      log(6, err);
      return;
    }

    log(6, asyncFileContents);
  });
  log(5, 'reading file ...');
});

log(4, 'writing file ...');

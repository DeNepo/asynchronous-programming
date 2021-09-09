'use strict';
debugger;

// require built-in dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// --- main script ---
const log = labeledLogger(Date.now());

const sourceFile = path.join(__dirname, process.argv[2]);
log(1, sourceFile);

const targetFile = path.join(__dirname, process.argv[3]);
log(2, targetFile);

const callback = (err) => {
  if (err) {
    log(4, err);
    return;
  }

  log(4, 'done!');
};

fs.copyFile(sourceFile, targetFile, 0, callback);

log(3, '...');

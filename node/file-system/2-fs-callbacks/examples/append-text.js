'use strict';
debugger;

// require built-in dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// --- main script ---
const log = labeledLogger(Date.now());

const contentToAppend = process.argv[2] + '\n';
log(1, contentToAppend);

console.log(typeof parseInt(process.argv[2]));

const callback = (err) => {
  if (err) {
    log(3, err);
    return;
  }

  log(3, 'done!');
};

const filePath = path.join(__dirname, 'file.txt');
fs.appendFile(filePath, contentToAppend, callback);

log(2, '...');
log(process.argv);

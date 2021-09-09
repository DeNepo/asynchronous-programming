'use strict';
debugger;

// what happens when you run this file with these two cli args?
//  $ node read-text.js file.json
//  $ node read-text.js file.txt

// require built-in dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// --- main script ---
const log = labeledLogger(Date.now());

const filePath = path.join(__dirname, process.argv[2]);
log(1, filePath);

const callback = (err, content) => {
  if (err) {
    log(3, err);
    return;
  }

  log(3, content);
};

fs.readFile(filePath, 'utf-8', callback);

log(2, '...');

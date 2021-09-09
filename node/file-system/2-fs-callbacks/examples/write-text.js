'use strict';
debugger;

// require built-in dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// --- main script ---
const log = labeledLogger(Date.now());

const filePath = path.join(__dirname, process.argv[2]);
log(1, filePath);

const newContent = process.argv[3];
log(2, newContent);

const callback = (err) => {
  if (err) {
    log(4, err);
    return;
  }

  log(4, 'all done!');
};

fs.writeFile(filePath, newContent, callback);

log(3, '...');

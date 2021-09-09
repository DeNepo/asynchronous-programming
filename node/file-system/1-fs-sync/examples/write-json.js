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

// change this value and see what happens
const toStringify = {
  e: 3,
  moreThings: [
    {
      wolf: 'cola',
    },
    'monkey?',
    true,
  ],
};
log(2, toStringify);

const toWrite = JSON.stringify(toStringify, null, '  ');
log(3, toWrite);

log(4, '...');
fs.writeFileSync(filePath, toWrite);

log(5, 'all done!');

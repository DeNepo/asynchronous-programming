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

log(2, '...');
const filePath = path.join(__dirname, 'file.txt');
fs.appendFileSync(filePath, contentToAppend);

log(3, 'done!');

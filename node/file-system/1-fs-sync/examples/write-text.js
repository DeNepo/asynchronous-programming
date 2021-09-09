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

log(3, '...');
fs.writeFile(filePath, newContent);

log(4, 'all done!');

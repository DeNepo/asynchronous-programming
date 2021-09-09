'use strict';
debugger;

// what happens when you run this file with these two cli args?
//  $ node read-json.js file.txt
//  $ node read-json.js file.json

// require built-in dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// --- main script ---
const log = labeledLogger(Date.now());

const filePath = path.join(__dirname, process.argv[2]);
log(1, filePath);

log(2, '...');

// the contents will always be a string!
const content = fs.readFileSync(filePath, 'utf-8');
log(3, content);

try {
  // .json files are also strings, you need to parse them if you want an object
  const parsedContents = JSON.parse(content);
  log(4, parsedContents);
} catch (err) {
  log(4, err);
}

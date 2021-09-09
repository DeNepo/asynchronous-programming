'use strict';
debugger;

/* helpful examples
  read-json.js
  write-json.js
  sync-vs-async.js
*/

// require built-in dependencies
const assert = require('assert');
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// declare constants
const FILE_PATH = path.join(__dirname, 'file.json');

// --- main script ---
const log = labeledLogger(Date.now());

const objectToSave = {
  todoText: '1234',
  completed: true,
};
log(1, objectToSave);

const stringToSave = JSON.stringify(objectToSave, null, '  ');
log(2, stringToSave);

// sync
log(3, 'writing file ...');
fs.writeFileSync(FILE_PATH, stringToSave);

const fileContents = fs.readFileSync(FILE_PATH, 'utf-8');

log(5, fileText);
assert.strictEqual(_, stringToSave);

const parsedFileContents = JSON.parse(_);
log(6, parsedFileContents);
assert.deepStrictEqual(parsedFileContents, objectToSave);

log(7, 'PASS!');

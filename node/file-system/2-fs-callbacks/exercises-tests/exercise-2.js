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
const EXERCISE_NAME = path.basename(__filename);
const FILE_PATH = path.join(__dirname, 'file.json');

// --- main script ---
const log = labeledLogger(Date.now());

log(0, `--- ${EXERCISE_NAME} ---`);

const objectToSave = {
  todoText: '1234',
  completed: true,
};
log(1, objectToSave);

const stringToSave = _._(objectToSave, null, '  ');
log(2, stringToSave);

const writeFileCallback = (err) => {
  if (err) {
    log(4, err);
    return;
  }

  log(4, 'reading file ...');
  // sync
  const fileText = fs._(_, _);

  log(5, fileText);
  assert.strictEqual(fileText, stringToSave);

  const parsedFileContents = _._(fileText);
  log(6, parsedFileContents);
  assert.deepStrictEqual(parsedFileContents, objectToSave);

  log(7, '\033[32mpass!\x1b[0m');
};

// async
fs._(_, _, _);
log(3, 'writing file ...');

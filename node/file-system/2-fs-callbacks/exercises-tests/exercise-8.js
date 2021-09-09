'use strict';
debugger;

/* reverse-engineering

  To understand what this exercise should do,
  practice using exercise-8-demo in the terminal

  your task is to reverse-engineer the behavior of the demo

  you'll know you've finished when it's impossible to tell
    if you're using the demo or your exercise
*/

// require dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// declare constants
const EXERCISE_NAME = path.basename(__filename);
const DOC_STRING = `
COMMANDS:

  list
    logs all of the file names in the current directory

  read <fileName>
    logs the contents of <fileName>

FLAGS:

  -h
    print this helpful message
`;

// --- main script ---
const log = labeledLogger(Date.now());

log(0, `--- ${EXERCISE_NAME} ---`);

// fill in the _'s to reverse-engineer the behavior of exercise-8-demo.min.js

// log the DOCS is the user asked for help
if (process.argv.includes('-h')) {
  log(0, DOC_STRING);
  process.exit(0);
}

// read user input to variables for easier code reading
const command = process.argv[_];
const fileName = _;

// check if the user provided a command
if (command === _) {
  log(1, 'a command is required, exiting');
  process.exit(0);
}
log(1, 'command: ' + command);

// execute the command requested by the user
if (command === '_') {
  const callback = (err, contents) => {
    if (err) {
      log(3, err);
      process.exit(1);
    }

    log(3, _);
  };
  fs._(__dirname, callback);
  log(2, 'reading all content names ...');
} else if (command === '_') {
  // check if the user provided a file name
  if (fileName === undefined) {
    log(2, 'a file name is required, exiting');
    process.exit(0);
  }
  log(2, 'fileName: ' + fileName);

  const filePath = path.join(__dirname, fileName);

  const callback = (err, _) => {
    if (err) {
      log(4, err);
      process.exit(1);
    }

    log(4, contents);
  };
  fs._(filePath, 'utf-8', callback);
  log(3, 'reading ' + fileName + ' ...');
} else {
  log(2, 'unknown command: ' + command);
}

'use strict';
debugger;

// require built-in dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// declare constants
const FILE_PATH = path.join(__dirname, 'file.txt');

// --- main script ---
const log = labeledLogger(Date.now());

log(0, 'begin!');

const fsWriteCallback = (err) => {
  if (err) {
    log(3, err);
    return;
  }

  log(3, 'second write is finished');
};

fs.writeFile(FILE_PATH, '111', fsWriteCallback);

fs.writeFileSync(FILE_PATH, '222');

log(1, 'first write is finished');

const firstRead = fs.readFileSync(FILE_PATH, 'utf-8');

log(2, firstRead);

const fsReadCallback = (err, secondRead) => {
  if (err) {
    log(4, err);
    return;
  }

  log(4, secondRead);
};

fs.readFile(FILE_PATH, 'utf-8', fsReadCallback);

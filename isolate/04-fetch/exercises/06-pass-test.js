'use strict';

// what data in which .json file sums to 0?

const log = labeledLogger('6. Pass Test');

const origin = window.location.origin;
const path = _;
const requestURL = origin + path;
log('requestURL: ', requestURL);

const sumNumbers = data => {
  // write me!
};

const handleRejection = err => {
  log(err);
};

const testSum = sum => {
  log('actual sum: ', sum, '\nexpected sum:', 3);
};

const parseResponse = response => {
  log(response);
  return response.json();
};

// something is missing ....

log('end of synchronous tasks');

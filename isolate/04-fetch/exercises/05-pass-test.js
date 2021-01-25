'use strict';

// which data entry has 5 entries?

const log = labeledLogger('5. Pass Test');

const origin = window.location.origin;
const path = _;
const requestURL = origin + path;
log('requestURL: ', requestURL);

const parseResponse = response => {
  log(response);
  return response.json();
};

const lengthOfData = data => {
  // write me!
};

const testDataLength = dataLength => {
  // data should have length 5
  log('actual dataLength: ', dataLength, '\nexpected dataLength:', 5);
};

const handleRejection = err => {
  log(err);
};

// write the consumers
fetch(requestURL)._;

log('end of synchronous tasks');

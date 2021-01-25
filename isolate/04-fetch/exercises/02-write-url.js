'use strict';

const log = labeledLogger('2. Write URL');

const origin = window.location.origin;
const path = _;
const requestURL = origin + path;
log('requestURL: ', requestURL);

const parseResponse = response => {
  log(response);
  return response.json();
};

const separateBrazilNut = nuts => {
  log('nuts:', nuts);
  return nuts[1];
};

const testNut = nutName => {
  // this one is also a country
  log('actual nutName: ', nutName, '\nexpected nutName:', 'brazil');
};

const handleRejection = err => {
  log(err);
};

// careful, these might not be right
fetch(requestURL)
  .then(parseResponse())
  .then(separateBrazilNut())
  .then(testNut())
  .catch(handleRejection());

log('end of synchronous tasks');

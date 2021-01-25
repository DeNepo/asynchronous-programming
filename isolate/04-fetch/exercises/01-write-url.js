'use strict';

const log = labeledLogger('1. Write URL');

const origin = window.location.origin;
const path = _;
const requestURL = origin + path;
log('requestURL: ', requestURL);

const parseResponse = response => {
  log(response);
  return response.json();
};

const separateStrings = jsonTypes => {
  log('JSON Types:', jsonTypes);
  return jsonTypes.strings;
};

const testStrings = strings => {
  // should be the strings from json-types.json
  log('actual strings: ', strings, '\nexpected strings:', [
    'only double quotes!',
    "there is no 'undefined' in JSON",
    '',
  ]);
};

const handleRejection = err => {
  log(err);
};

fetch(requestURL)
  .then(_)
  .then(_)
  .then(_)
  .catch(_);

log('end of synchronous tasks');

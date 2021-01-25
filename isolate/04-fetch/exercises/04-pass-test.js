'use strict';

const log = labeledLogger('4. Pass Test');

const origin = window.location.origin;
const path = _;
const requestURL = origin + path;
log('requestURL: ', requestURL);

const parseResponse = response => {
  log(response);
  return response.json();
};

const filterMushes = mushes => {
  // write me!
};

const testFilteredMushes = trueMush => {
  log('actual trueMush: ', trueMush, '\nexpected trueMush', ['grey', 'orange']);
};

const handleRejection = err => {
  log(err);
};

// careful, this might not be right
fetch(requestURL)
  .catch(err => handleRejection(err))
  .then(filteredData => testFilteredMushes(filteredData))
  .then(res => parseResponse(res))
  .then(data => filterMushes(data));

log('end of synchronous tasks');

'use strict';

const log = labeledLogger('3. Write URL');

const origin = window.location.origin;
const path = _;
const requestURL = origin + path;
log('requestURL: ', requestURL);

// careful!  these are not in order ;)

const testWormsTypes = wormsTypes => {
  // these worms can be found in Siberia
  log('actual wormsTypes: ', wormsTypes, '\nexpected wormsTypes:', {
    striped: [
      'siberia',
      'europe',
      'antarctica',
      'pacific islands',
      'indian subcontinent',
    ],
    wavy: ['siberia', 'south america'],
  });
};

const parseResponse = response => {
  log(response);
  return response.json();
};

const handleRejection = err => {
  log(err);
};

const separateAustralianTypes = worms => {
  log('worms:', worms);
  const siberianWorms = {};
  for (let kind in worms) {
    if (worms[kind].includes('siberia')) {
      siberianWorms[kind] = worms[kind];
    }
  }
  return siberianWorms;
};

// write the consumers
fetch(requestURL)._;

log('end of synchronous tasks');

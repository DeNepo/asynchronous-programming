'use strict';

/* Dry Foods

  more exploring

*/

const log = labeledLogger('Dry Foods');

const origin = window.location.origin;
const path = '/fake-api-data/food/dry/grains.json';
const requestURL = origin + path;
log('requestURL: ', requestURL);

const parseResponse = response => {
  const parsedResponse = response.json();
  log(response, '\n\nparsed response:', parsedResponse);
  return parsedResponse;
};
const testGrains = grains => {
  log('actual grains: ', grains, '\nexpected grains:', [
    'wheat',
    'barley',
    'millet',
    'rice',
    'bulgar',
  ]);
};
const handleRejection = err => {
  log(err);
};

fetch(requestURL)
  .then(res => parseResponse(res))
  .then(data => testGrains(data))
  .catch(err => handleRejection(err));

log('end of synchronous tasks');

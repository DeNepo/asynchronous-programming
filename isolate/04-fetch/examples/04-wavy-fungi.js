'use strict';

/* Wavy Fungi

  let's explore the data

*/

const log = labeledLogger('Wavy Fungi');

const origin = window.location.origin;
const path = '/fake-api-data/animals/fungi.json';
const requestURL = origin + path;
log('requestURL: ', requestURL);

const parseResponse = response => {
  const parsedResponse = response.json();
  log(response, '\n\nparsed response:', parsedResponse);
  return parsedResponse;
};
const separateWavyFungi = fungi => {
  log('all fungi:', fungi);
  return fungi.wavy;
};
const testWavyFungi = wavyFungi => {
  log('actual wavyFungi: ', wavyFungi, '\nexpected wavyFungi', [
    'siberia',
    'south america',
  ]);
};
const handleRejection = err => {
  log(err);
};

fetch(requestURL)
  .then(res => parseResponse(res))
  .then(data => separateWavyFungi(data))
  .then(filteredData => testWavyFungi(filteredData))
  .catch(err => handleRejection(err));

log('end of synchronous tasks');

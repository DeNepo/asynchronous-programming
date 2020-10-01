'use strict';

/* Bad Response

  it's a good practice to make sure the response was ok before parsing it

  if it was not a good response, throw an error that will be handled later

*/

const log = labeledLogger('then: bad response');


const fetchFromFakeApi = (dataPath = '') => {

  const requestURL = window.location.origin + '/isolate/fake-api' + dataPath;
  log("requestURL: ", requestURL);

  return fetch(requestURL)
    .then(response => {
      log(dataPath, response);
      if (!response.ok || response.status !== 200) {
        throw new Error('response was not ok');
      };

      return response.json();
    });

};



const helloPath = '/hello.json';
fetchFromFakeApi(helloPath)
  .then(data => {
    const logMessage = Object.entries(data)[0].join(' ');
    log(logMessage);
  })
  .catch(err => log(helloPath + ' -', err));



const jsonTypesPath = '/json-types.json';
fetchFromFakeApi(jsonTypesPath)
  .then(data => {
    const numberOfTypes = Object.keys(data).length;
    const logMessage = `there are ${numberOfTypes} types in JSON`;
    log(logMessage);
  })
  .catch(err => log(jsonTypesPath + ' -', err));


const doesNotExistPath = '/does-not-exist.json';
fetchFromFakeApi(doesNotExistPath)
  .then(data => {
    const logMessage = Object.entries(data)[0].join(' ');
    log(logMessage);
  })
  .catch(err => log(helloPath + ' -', err));




log('--- end of synchronous tasks ---');

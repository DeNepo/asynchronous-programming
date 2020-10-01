'use strict';

/* Fetching Function

  you can return promises from a function and use the return value with .then
    this helps for abstracting API calls

  You can define a function that fetches from an API and executes any shared logic
    it will return a promise resolving to the parsed data for specific use cases

*/


const log = labeledLogger('await: fetching function');


const fetchFromFakeApi = async (dataPath = '') => {

  const requestURL = window.location.origin + '/isolate/fake-api' + dataPath;
  log("requestURL: ", requestURL);

  const response = await fetch(requestURL);
  log(dataPath, response);

  const parsedData = await response.json();

  return parsedData

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




log('--- end of synchronous tasks ---');

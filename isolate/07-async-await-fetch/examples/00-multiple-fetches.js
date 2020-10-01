'use strict';

/* Multiple Fetches

  often you will want to make many similar API calls
  this will get repetitive

  The next file will show a better way to deal with this

*/


const log = labeledLogger('Multiple Fetches');

const origin = window.location.origin;
const basePath = '/isolate/fake-api';



const helloUrl = origin + basePath + '/hello.json';
log(helloUrl);
fetch(helloUrl)
  .then(res => {
    log('/hello.json response:', res);
    if (!res.ok) {
      throw new Error('response was not ok');
    }
    return res.json()
  })
  .then(data => {
    const logMessage = Object.entries(data)[0].join(' ');
    log(logMessage);
  })
  .catch(err => log('/hello.json error:', err));



const jsonTypesUrl = origin + basePath + '/json-types.json';
log(jsonTypesUrl);
fetch(jsonTypesUrl)
  .then(res => {
    log('/json-types.json response:', res);
    if (!res.ok) {
      throw new Error('response was not ok');
    }
    return res.json()
  })
  .then(data => {
    const numberOfTypes = Object.keys(data).length;
    const logMessage = `there are ${numberOfTypes} types in JSON`;
    log(logMessage);
  })
  .catch(err => log('/json-types.json error:', err));



const doesNotExistUrl = origin + basePath + '/does-not-exist.json';
log(doesNotExistUrl);
fetch(doesNotExistUrl)
  .then(res => {
    log('/does-not-exist.json response:', res);
    if (!res.ok) {
      throw new Error('response was not ok');
    }
    return res.json()
  })
  .then(data => {
    // this never happens!
  })
  .catch(err => log('/does-not-exist.json error:', err));



log('--- end of synchronous tasks ---');

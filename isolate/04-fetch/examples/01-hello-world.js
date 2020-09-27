'use strict';

/* Hello World

  0. Send the request using fetch, a promise is returned
  1. then parse the response into plain old JavaScript data (returns a promise)
  2. then do something with the data, it's just a plain JS object!
  3. catch any errors or rejections

  What happens if you enter the requestURL directly into your browser's navbar?

*/


const log = labeledLogger('Hello World');

const origin = window.location.origin;
const path = '/isolate/04-fetch/fake-api/hello.json';
const requestURL = origin + path;
log("requestURL: ", requestURL);


const parseResponse = (response) => {
  const parsedResponse = response.json();
  log('response: ', response, '\n',
    'parsed: ', parsedResponse);
  return parsedResponse;
};
const logData = (data) => {
  log('data:', data);
};
const handleRejection = (err) => {
  log(err);
};


fetch(requestURL)
  .then(parseResponse)
  .then(logData)
  .catch(handleRejection);


log('end of synchronous tasks');

'use strict';


/* JSON Types

  JSON is a data format used all the time in web development
    Most API requests and responses use JSON

  JSON stands for JavaScript Object Notation
  it looks a lot like, well, JavaScript objects

  It has fewer types than JavaScript, all of them are listed in this example

*/


const log = labeledLogger('JSON Types');

const origin = window.location.origin;
const path = '/isolate/04-fetch/fake-api/json-types.json';
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

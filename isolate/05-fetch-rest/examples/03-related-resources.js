'use strict';


/* Related Resources

  You can select data based on it's relationships

  for example:
    all posts made by user 3

*/


const log = labeledLogger('3. Related Resources');
const origin = 'https://jsonplaceholder.typicode.com';


const parseResponse = (response) => {
  return response.json();
};
const logData = (logMessage) => {
  return (data) => {
    log(logMessage, data);
  };
};
const handleRejection = (err) => {
  log(err);
};


const users3 = '/users/3';
const logUser3 = logData(users3);
fetch(origin + users3)
  .then(res => parseResponse(res))
  .then(data => logUser3(data))
  .catch(err => handleRejection(err));


const users3Albums = '/users/3/albums';
const logUser3Albums = logData(users3Albums);
fetch(origin + users3Albums)
  .then(res => parseResponse(res))
  .then(data => logUser3Albums(data))
  .catch(err => handleRejection(err));

const users3Posts = '/users/3/posts';
const logUser3Posts = logData(users3Posts);
fetch(origin + users3Posts)
  .then(res => parseResponse(res))
  .then(data => logUser3Posts(data))
  .catch(err => handleRejection(err));


const users3Todos = '/users/3/todos';
const logUser3Todos = logData(users3Todos);
fetch(origin + users3Todos)
  .then(res => parseResponse(res))
  .then(data => logUser3Todos(data))
  .catch(err => handleRejection(err));








log('end of synchronous tasks');

'use strict';


/* Related Resources

  You can select data based on it's relationships

  for example:
    all posts made by user 3

*/


const log = labeledLogger('3. Related Resources');


const fetchRelatedResources = async (paths = []) => {
  const joinedPaths = paths.join('/');

  const url = `https://jsonplaceholder.typicode.com/${joinedPaths}`;
  log(url);

  const response = await fetch(url);
  if (!response.ok || response.status !== 200) {
    throw new Error('response was not ok');
  }

  const data = await response.json();
  return data;
};


const logData = (logMessage) => {
  return (data) => {
    log(logMessage, data);
  };
};



const users3 = ['users', '3'];
const logUser3 = logData(users3.join('/'));
fetchRelatedResources(users3)
  .then(data => logUser3(data))
  .catch(err => logUser3(err));


const users3Albums = ['users', '3', 'albums'];
const logUser3Albums = logData(users3Albums.join('/'));
fetchRelatedResources(users3Albums)
  .then(data => logUser3Albums(data))
  .catch(err => logUser3Albums(err));


const users3Posts = ['users', '3', 'posts'];
const logUser3Posts = logData(users3Posts.join('/'));
fetchRelatedResources(users3Posts)
  .then(data => logUser3Posts(data))
  .catch(err => logUser3Posts(err));


const users3Todos = ['users', '3', 'todos'];
const logUser3Todos = logData(users3Todos.join('/'));
fetchRelatedResources(users3Todos)
  .then(data => logUser3Todos(data))
  .catch(err => logUser3Todos(err));







log('... end of synchronous tasks ...');

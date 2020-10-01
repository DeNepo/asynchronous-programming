'use strict';


/* Resource Routes

  in RESTful routes, each resource type has it's own route

*/


const log = labeledLogger('1. Resource Routes');


const fetchResourceType = async (resourceType) => {
  const url = 'https://jsonplaceholder.typicode.com/' + resourceType;
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


const albums = 'albums';
const logAlbums = logData(albums);
fetchResourceType(albums)
  .then(data => logAlbums(data))
  .catch(err => logAlbums(err));


const posts = 'posts';
const logPosts = logData(posts);
fetchResourceType(posts)
  .then(data => logPosts(data))
  .catch(err => logPosts(err));


const users = 'users';
const logUsers = logData(users);
fetchResourceType(users)
  .then(data => logUsers(data))
  .catch(err => logUsers(err));



log('... end of synchronous tasks ...');

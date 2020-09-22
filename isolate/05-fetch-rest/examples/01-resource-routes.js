'use strict';


/* Resource Routes

  in RESTful routes, each resource type has it's own route

*/


const log = labeledLogger('1. Resource Routes');
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


const albumsPath = '/albums';
const logAlbums = logData(albumsPath);
fetch(origin + albumsPath)
  .then(parseResponse)
  .then(logAlbums)
  .catch(handleRejection);


const postsPath = '/posts';
const logPosts = logData(postsPath);
fetch(origin + postsPath)
  .then(parseResponse)
  .then(logPosts)
  .catch(handleRejection);


const usersPath = '/users';
const logUsers = logData(usersPath);
fetch(origin + usersPath)
  .then(parseResponse)
  .then(logUsers)
  .catch(handleRejection);



log('end of synchronous tasks');

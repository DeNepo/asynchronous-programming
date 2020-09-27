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
  .then(res => parseResponse(res))
  .then(data => logAlbums(data))
  .catch(err => handleRejection(err));


const postsPath = '/posts';
const logPosts = logData(postsPath);
fetch(origin + postsPath)
  .then(res => parseResponse(res))
  .then(data => logPosts(data))
  .catch(err => handleRejection(err));


const usersPath = '/users';
const logUsers = logData(usersPath);
fetch(origin + usersPath)
  .then(res => parseResponse(res))
  .then(data => logUsers(data))
  .catch(err => handleRejection(err));



log('end of synchronous tasks');

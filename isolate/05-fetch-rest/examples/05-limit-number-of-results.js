'use strict';


/* Limit Number of Results

  you can limit the number of results using _limit=X

*/


const log = labeledLogger('5. Limit Number of Results');
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


const threeUsers = '/users?_limit=3';
const logThreeUsers = logData(threeUsers);
fetch(origin + threeUsers)
  .then(res => parseResponse(res))
  .then(data => logThreeUsers(data))
  .catch(err => handleRejection(err));

const fiveUsers = '/users?_limit=5';
const logFiveUsers = logData(fiveUsers);
fetch(origin + fiveUsers)
  .then(res => parseResponse(res))
  .then(data => logFiveUsers(data))
  .catch(err => handleRejection(err));



const sixPostsByUser3 = '/users/3/posts?_limit=6';
const logSixPostsByUser3 = logData(sixPostsByUser3);
fetch(origin + sixPostsByUser3)
  .then(res => parseResponse(res))
  .then(data => logSixPostsByUser3(data))
  .catch(err => handleRejection(err));



const twoPhotosFromAlbum6 = '/albums/6/photos?_limit=2';
const logTwoPhotosFromAlbum6 = logData(twoPhotosFromAlbum6);
fetch(origin + twoPhotosFromAlbum6)
  .then(res => parseResponse(res))
  .then(data => logTwoPhotosFromAlbum6(data))
  .catch(err => handleRejection(err));

const fivePhotosFromAlbum1 = '/photos?albumId=1&_limit=5';
const logFivePhotosFromAlbum1 = logData(fivePhotosFromAlbum1);
fetch(origin + fivePhotosFromAlbum1)
  .then(res => parseResponse(res))
  .then(data => logFivePhotosFromAlbum1(data))
  .catch(err => handleRejection(err));








log('end of synchronous tasks');

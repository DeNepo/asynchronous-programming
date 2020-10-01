'use strict';


/* Limit Number of Results

  you can limit the number of results using _limit=X

*/


const log = labeledLogger('5. Limit Number of Results');


const fetchPathsQueries = async (paths = [], queries = []) => {
  const joinedPaths = paths.join('/');

  const joinedQueries = queries
    .map(queryArray => {
      const nextQuery = queryArray[0] + '=' + queryArray[1];
      return nextQuery;
    })
    .join('&');
  const encodedQueries = encodeURI(joinedQueries);

  const url = `https://jsonplaceholder.typicode.com/${joinedPaths}?${encodedQueries}`;
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



const logThreeUsers = logData('/users?_limit=3');
fetchPathsQueries(['users'], [['_limit', '3']])
  .then(data => logThreeUsers(data))
  .catch(err => logThreeUsers(err));


const logFiveUsers = logData('/users?_limit=5');
fetchPathsQueries(['users'], [['_limit', '5']])
  .then(data => logFiveUsers(data));



const logSixPostsByUser3 = logData('/users/3/posts?_limit=6');
fetchPathsQueries(['users', '3'], [['_limit', '6']])
  .then(data => logSixPostsByUser3(data))
  .catch(err => logSixPostsByUser3(err));



const logTwoPhotosFromAlbum6 = logData('/albums/6/photos?_limit=2');
fetchPathsQueries(['albums', '6', 'photos'], [['_limit', '2']])
  .then(data => logTwoPhotosFromAlbum6(data))
  .catch(err => logTwoPhotosFromAlbum6(err));

const logFivePhotosFromAlbum1 = logData('/photos?albumId=1&_limit=5');
fetchPathsQueries(['photos'], [['albumId', '1'], ['_limit', '5']])
  .then(data => logFivePhotosFromAlbum1(data))
  .catch(err => logFivePhotosFromAlbum1(err));







log('... end of synchronous tasks ...');

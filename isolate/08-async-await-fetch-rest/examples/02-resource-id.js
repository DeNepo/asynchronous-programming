'use strict';


/* Resource IDs

  You can also get a specific item by it's id

*/


const log = labeledLogger('2. Resource Routes');


const fetchById = async (resourceType, id) => {
  const url = `https://jsonplaceholder.typicode.com/${resourceType}/${id}`;
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


const logAlbum1 = logData('/albums/1');
fetchById('albums', '1')
  .then(data => logAlbum1(data))
  .catch(err => logAlbum1(err));


const logAlbum4 = logData('/albums/4');
fetchById('albums', '4')
  .then(data => logAlbum4(data))
  .catch(err => logAlbum4(err));



const logComment2 = logData('/comments/2');
fetchById('comments', '2')
  .then(data => logComment2(data))
  .catch(err => logComment2(err));


const logComment4 = logData('/comments/4');
fetchById('comments', '4')
  .then(data => logComment4(data))
  .catch(err => logComment2(err));





log('... end of synchronous tasks ...');

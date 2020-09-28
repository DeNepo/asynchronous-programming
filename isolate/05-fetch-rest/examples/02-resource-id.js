'use strict';


/* Resource IDs

  You can also get a specific item by it's id

*/


const log = labeledLogger('2. Resource Routes');
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


const album1Path = '/albums/1';
const logAlbum1 = logData(album1Path);
fetch(origin + album1Path)
  .then(res => parseResponse(res))
  .then(data => logAlbum1(data))
  .catch(err => handleRejection(err));


const album4Path = '/albums/4';
const logAlbum4 = logData(album4Path);
fetch(origin + album4Path)
  .then(res => parseResponse(res))
  .then(data => logAlbum4(data))
  .catch(err => handleRejection(err));



const comment2Path = '/comments/2';
const logComment2 = logData(comment2Path);
fetch(origin + comment2Path)
  .then(res => parseResponse(res))
  .then(data => logComment2(data))
  .catch(err => handleRejection(err));


const comment4Path = '/comments/4';
const logComment4 = logData(comment4Path);
fetch(origin + comment4Path)
  .then(res => parseResponse(res))
  .then(data => logComment4(data))
  .catch(err => handleRejection(err));






log('end of synchronous tasks');

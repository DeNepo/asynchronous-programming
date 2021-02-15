'use strict';

/* Concurrent requests
  
  Sometimes you want to do multiple requests simultaneously, but only do something with the result when all the requests
  have finished. For this Promise.all() can be used. 
  
*/
const log = labeledLogger('Concurrent requests');

async function fetchRepository(repositoryName) {
  log(`Fetching ${repositoryName}`);
  
  const response = await fetch(`https://api.github.com/repos/${repositoryName}`);
  const repository = await response.json();

  log(`fetched ${repositoryName}`);
  
  return repository;
}

Promise.all([
  fetchRepository('HackYourFutureBelgium/asynchronous-programming'),
  fetchRepository('HackYourFutureBelgium/encapsulation'),
  fetchRepository('HackYourFutureBelgium/state'),
]).then(repositories => {
  log(repositories);
});
import { labeledLogger } from '/lib/labeled-logger.js';
import { fakeFetch } from '/lib/fake-fetch.js';

const log = labeledLogger(Date.now());

/* fakeFetch

  you will be using async/await functions to fetch data from an API
  there is a lot to learn about asynchronous programming and Promises
  /isolate covers only what you need to study the /api-calls chapter

  fetch is different from functions you've used so far because:
    1. you don't know if it will succeed or fail
    2. you don't know how long it will take to complete
    3. it returns a promise

  fakeFetch is a function that behaves a little like fetch:
    - it will randomly throw an error 1/5 times you call it
    - it has a random delay between 0 and 5 seconds
    - it returns a promise

  after a random delay, the returned promise resolves to your argument
  you can use the value again by calling .then on the returned promise

  you should understand this function before moving on
  it's more complicated to explain than to study, check out the logs & debugger

*/

// --- declare some callbacks ---

const logResolvedValue = resolvedValue => {
  log('+ resolved:', resolvedValue);
};
const handleRejection = rejection => {
  log('- rejected:', rejection);
};

// --- use the callbacks ---

log('fetching "hello"');
fakeFetch('hello')
  .then(logResolvedValue)
  .catch(handleRejection);

log('fetching false');
fakeFetch(false)
  .then(logResolvedValue)
  .catch(handleRejection);

log('fetching "bye"');
fakeFetch('bye')
  .then(logResolvedValue)
  .catch(handleRejection);

log('= = = =  the call stack is empty  = = = =');

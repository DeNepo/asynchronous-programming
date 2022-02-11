import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* fetchUserById

  there is a lot to learn about asynchronous programming, Promises and async/await
  /isolate covers only what you need to know for fetching data from an API

  fetching from APIs is different from what you've done so far because:
    1. there can be random network errors that cause the fetch to fail
    2. there may be an error in the API's server that's out of your control
    3. you don't know how long it will take for the data to come back to you
    4. fetching data return a response object wrapped in a promise
    5. you need to parse the API response's data into a JS object

  fetchUserById is a function that behaves a little like fetching from an API:
    1. it will randomly throw a "network error"
    2. it will randomly throw a "server error"
    3. it has a random delay
    4. it's return value resolves to a fake response object
    5. the response has a .json() method that resolves to your requested data
      this promise can also take some time to resolve!

  it's more complicated to explain than to study, so check out the logs & debugger
  and run the script a few times!  you never know when there'll be an error ;)

*/

// --- declare the callbacks ---

const handleResponse = (res) => {
  // this function is only executed if there was not a network error

  // debugger;
  log('response:', res);

  // check if there is a problem with the response
  if (!res.ok) {
    // do not continue with the data if something went wrong
    throw new Error(`${res.status}: ${res.statusText}`);
  }

  // convert the data to a promise that resolves to the data object
  const dataPromise = res.json();
  log('data promise:', dataPromise);

  // pass the data to the next .then handler after it resolves
  return dataPromise;
};

const logUser = (theUser) => {
  // debugger;
  log(`user ${theUser.id}:`, theUser);
};

const handleRejection = (rejection) => {
  // debugger;
  error('rejected:', rejection);
};

// --- use the callbacks ---

log('fetching user 1');
fetchUserById(1)
  // check if the response is ok and parse the data
  .then(handleResponse)
  // log the parsed user object
  .then(logUser)
  // catch any errors in the network or the response
  .catch(handleRejection);

log('fetching user 12 (there are only 10 users!)');
fetchUserById(12)
  .then((res) => handleResponse(res))
  .then((user) => logUser(user))
  .catch((err) => handleRejection(err));

log('= = = =  the call stack is empty  = = = =');

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
    4. fetched data will be wrapped in a promise

  fetchUserById is a function that behaves a little like fetching from an API:
    1. it will randomly throw a "network error"
    2. it will randomly throw a "server error"
    3. it has a random delay

  it's more complicated to explain than to study, so check out the logs & debugger
  and run the script a few times!  you never know when there'll be an error ;)

*/

// --- declare the callbacks ---

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
  // log the parsed user object
  .then(logUser)
  // catch any errors in the network or the response
  .catch(handleRejection);

log('fetching user 12 (there are only 10 users!)');
fetchUserById(12)
  .then((user) => logUser(user))
  .catch((err) => handleRejection(err));

log('= = = =  the call stack is empty  = = = =');

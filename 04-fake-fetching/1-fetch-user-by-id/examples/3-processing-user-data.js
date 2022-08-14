import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* processing user data

  after fetching data from an API you will need to process it
  this is usually done in a .then() handler after the response handler

*/

// --- declare some callbacks ---

const createIntroduction = (user) => {
  return `${user.id}: Hello, my name is ${user.name}.`;
};

// --- use the callbacks ---

log('fetching user 1');
fetchUserById(1)
  .then((user) => createIntroduction(user))
  // "1: Hello, my name is Leanne Graham"
  .then((intro) => log(intro))
  .catch((err) => error(err));

log('fetching user 5');
fetchUserById(5)
  .then((user) => createIntroduction(user))
  // 51: Hello, my name is Chelsey Dietrich"
  .then((intro) => log(intro))
  .catch((err) => error(err));

log('fetching user 12 (there are only 10 users!)');
fetchUserById(12)
  .then(createIntroduction)
  .then((intro) => log(intro))
  // 404
  .catch((err) => error(err));

log('= = = =  the call stack is empty  = = = =');

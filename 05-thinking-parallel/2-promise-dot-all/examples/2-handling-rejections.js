import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* handling rejections: Promise.all

  Promise.all is all-or-nothing
  it will reject the moment A SINGLE promise rejects
  it will not wait for the other promises to resolve

*/

const responsePromises = [
  fetchUserById(1),
  fetchUserById(2),
  fetchUserById(3),
  fetchUserById(4),
];

Promise.all(responsePromises)
  .then((responses) => {
    log('responses:', responses);

    for (const res of responses) {
      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
    }
    // parse each response into an user promises
    const userPromises = responses.map((res) => res.json());
    log('user promises:', userPromises);
    // return a promise that waits for all users to resolve
    return Promise.all(userPromises);
  })
  .then((users) => {
    log('users:', users);
    // create an array with only the users' names
    const names = users.map((user) => `${user.id}. ${user.name}`);
    log('names:', names);
  })
  // handle a network error
  .catch(error);

log('=== === === the callstack is empty === === ===');

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
  .then((users) => {
    log('users:', users);
    // create an array with only the users' names
    const names = users.map((user) => `${user.id}. ${user.name}`);
    log('names:', names);
  })
  // handle a network error
  .catch(error);

log('=== === === the callstack is empty === === ===');

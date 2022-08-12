import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* handling rejections: Promise.all + `async`/`await`

  here's the same code as before but with `async`/`await`

*/

const main = async () => {
  try {
    const responsePromises = [
      fetchUserById(1),
      fetchUserById(2),
      fetchUserById(3),
      fetchUserById(4),
    ];

    // await the responses
    const userPromises = await Promise.all(responsePromises);
    log('user promises:', userPromises);

    // await a promise that waits for all users to resolve
    const users = await Promise.all(userPromises);
    log('users:', users);

    // create an array with only the users' names
    const names = users.map((user) => `${user.id}. ${user.name}`);
    log('names:', names);
  } catch (err) {
    error(err);
  }
};

main();

log('=== === === the callstack is empty === === ===');

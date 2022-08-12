import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';
import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

/* no variables

  you can also return the chained promise directly
  the value returned from the final .then will be consumed outside the function

*/

// --- declare a function that returns a promise ---

/**
 * A function that fetches a user and returns their name.
 *
 * @param {number} userId - The user ID to fetch.
 * @returns {Promise<string>} A promise that resolves to the user's name.
 *
 * @throws {Error} {status number}: {status text}
 */
const getUserName = (id = 1) => {
  log('fetching user ' + id);

  return fetchUserById(id).then((user) => {
    log(`user ${id}:`, user);
    return user.name;
  });
};

// --- test the function ---

describe("getUserName: returns a user's name", () => {
  it("gets user 2's name", () => {
    return getUserName(2).then((actual) => {
      expect(actual).toEqual('Ervin Howell');
    });
  });
  it("gets user 3's name", () => {
    return getUserName(3).then((actual) => {
      expect(actual).toEqual('Clementine Bauch');
    });
  });
  it("gets user 4's name", () => {
    return getUserName(4).then((actual) => {
      expect(actual).toEqual('Patricia Lebsack');
    });
  });
  it("gets user 8's name", () => {
    return getUserName(8).then((actual) => {
      expect(actual).toEqual('Nicholas Runolfsdottir V');
    });
  });
});

log('= = = =  the call stack is empty  = = = =');

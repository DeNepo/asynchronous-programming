import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';
import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

/* returning a function

  normal functions can return a promise
    you can write .then after the function call
    or assign the return value to a variable and use .then

  it's just like adding adding more .thens
  just after the promise is returned instead of before

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
  const userPromise = fetchUserById(id);

  const readName = (user) => {
    log(`user ${id}:`, user);
    return user.name;
  };
  const namePromise = userPromise.then(readName);

  // return a promise that resolves to the user's name
  return namePromise;
};

// --- test the function that returns a promise ---

// you can return a promise with your assertion in .then
//  the test will pass if the promise resolves
//  and fail if the promise rejects

describe("getUserName: returns a user's name", () => {
  it("gets user 2's name", () => {
    const namePromise = getUserName(2);
    const assertionPromise = namePromise.then((actual) => {
      expect(actual).toEqual('Ervin Howell');
    });
    return assertionPromise;
  });
  it("gets user 3's name", () => {
    const assertionPromise = getUserName(3).then((actual) => {
      expect(actual).toEqual('Clementine Bauch');
    });
    return assertionPromise;
  });
  it("gets user 4's name", () => {
    return getUserName(4).then((actual) => {
      expect(actual).toEqual('Patricia Lebsack');
    });
  });
  it("gets user 5's name", () => {
    return getUserName(5).then((actual) =>
      expect(actual).toEqual('Chelsey Dietrich'),
    );
  });
  it("gets user 6's name", () =>
    getUserName(6).then((actual) =>
      expect(actual).toEqual('Mrs. Dennis Schulist'),
    ));
});

log('= = = =  the call stack is empty  = = = =');

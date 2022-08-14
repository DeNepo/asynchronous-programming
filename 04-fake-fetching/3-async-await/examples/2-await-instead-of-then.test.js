import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';
import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

/* `await` instead of `.then`

  inside of an async function you can use `await` instead of .then()
  when the program reaches `await something` it will wait in the event loop
    until the promise the `something` promise has resolved
  then it's value is available directly in a variable

  this is easier to read
  but doesn't change anything about how promises work
  you're just replacing .then(callback) with `await` inside your function

*/

// --- declare functions---

/**
 * Fetches a specific user.
 *
 * @param {number} [id=1] - The user id to fetch.
 * @returns {Promise<string>} A promise that resolves to the user's id and name.
 *
 * @throws {Error} {status number}: {status text}
 */
const getName = (id = 1) => {
  log('.then id:', id);

  // debugger;
  const userPromise = fetchUserById(id);

  const namePromise = userPromise.then((user) => {
    log('.then user:', user);
    return `${user.id}. ${user.name}`;
  });

  return namePromise;
};

/**
 * Fetches a specific user.
 *
 * @async
 * @param {number} [id=1] - The user id to fetch.
 * @returns {Promise<string>} A promise that resolves to the user's id and name.
 */
const getNameAsyncAwait = async (id = 1) => {
  log('await fetching id:', id);

  // debugger;
  const user = await fetchUserById(id);
  log(id, user);

  const name = `${user.id}. ${user.name}`;

  // name will be returned in a promise!
  return name;
};

// --- test the functions ---
// you can also use `async`/`await` in your unit tests

describe("getName: returns a user's name and id", () => {
  it('works for user 1', async () => {
    const actual = await getName(1);
    expect(actual).toEqual('1. Leanne Graham');
  });
  it('works for user 3', async () => {
    const actual = await getName(3);
    expect(actual).toEqual('3. Clementine Bauch');
  });
  it('works for user 9', async () => {
    const actual = await getName(9);
    expect(actual).toEqual('9. Glenna Reichert');
  });
});

describe("getNameAsyncAwait: returns a user's name and id", () => {
  it('works for user 1', async () => {
    const actual = await getNameAsyncAwait(1);
    expect(actual).toEqual('1. Leanne Graham');
  });
  it('works for user 3', async () => {
    const actual = await getNameAsyncAwait(3);
    expect(actual).toEqual('3. Clementine Bauch');
  });
  it('works for user 9', async () => {
    const actual = await getNameAsyncAwait(9);
    expect(actual).toEqual('9. Glenna Reichert');
  });
});

log('= = = =  the call stack is empty  = = = =');

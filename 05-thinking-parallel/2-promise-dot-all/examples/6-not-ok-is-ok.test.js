import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

/**
 * Fetches specific users and returns an array of their names.
 * If a user response is not ok, the error will be used instead of their name
 *
 * @async
 * @param {Array<number>} [ids=[]] - The id's to fetch.
 * @returns {Promise<Array>} - An array of the users' names.
 *
 * @throws {Error} {status number}: {status text}
 */
const namesById = async (ids = []) => {
  // debugger;

  // gather all user response promises in an array
  const userPromises = ids.map((nextId) => fetchUserById(nextId));

  // wait for all the data promises to resolve
  const users = await Promise.all(userPromises);

  // create an array with each user's name or server-side error message
  const names = users.map((user) =>
    typeof user === 'string' ? user : `${user.id}. ${user.name}`,
  );
  return names;
};

// --- --- tests --- ---

describe("namesById: returns an array of users' names", () => {
  describe('when fetching only users that exist', () => {
    it('lists user 3', async () => {
      const actual = await namesById([3]);
      expect(actual).toEqual(['3. Clementine Bauch']);
    });
    it('lists users 3, 2, 1', async () => {
      const actual = await namesById([3, 2, 1]);
      expect(actual).toEqual([
        '3. Clementine Bauch',
        '2. Ervin Howell',
        '1. Leanne Graham',
      ]);
    });
    it('lists all even users', async () => {
      const actual = await namesById([2, 4, 6, 8, 10]);
      expect(actual).toEqual([
        '2. Ervin Howell',
        '4. Patricia Lebsack',
        '6. Mrs. Dennis Schulist',
        '8. Nicholas Runolfsdottir V',
        '10. Clementina DuBuque',
      ]);
    });
  });
});

console.log('=== === === the callstack is empty === === ===');

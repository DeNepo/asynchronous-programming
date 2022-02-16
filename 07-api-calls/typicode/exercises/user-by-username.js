import { ORIGIN } from '../config.js';

/**
 * Fetches a single user with the given user name.
 *
 * @async
 * @param {string} [userName=''] - The user name to request.
 * @returns {Promise<object|null>} The user object if it exists, otherwise null.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const userByUsername = async (userName = '') => {
  // --- declare your resource's URL ---
  // hint: ctr-f "filter" -> https://github.com/typicode/json-server
  const URL = _;

  // --- fetch the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  // --- throw an error if the response is not ok (this works!) ---
  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  /* --- parse the data if the response was ok (this works!) ---*/
  const data = await response.json();

  // --- process the fetched data (if necessary) ---
  //   you do not need to use `await` below this comment
  const user = _;

  // --- return the final data ---
  return user;
};

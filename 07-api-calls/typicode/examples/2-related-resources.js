import { labeledLogger } from '../../../lib/labeled-logger.js';
import { ORIGIN } from '../config.js';

/* Related Resources

  You can select data based on it's relationships

  for example:
    all posts made by user 3

*/

const { log } = labeledLogger();

/**
 * Fetches all resources related to a specific resource of a different type.
 * For example, all comments on the 5th post -> /posts/5/comments.
 *
 * @async
 * @param {string[]} paths - An array of all paths to append to the URL.
 * @returns {Promise<object[]>} An array of all resources matching the search parameters.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
const fetchRelatedResources = async (paths = []) => {
  // --- declare your resource's URL ---
  const joinedPaths = paths.join('/');
  const URL = `${ORIGIN}/${joinedPaths}`;
  log(URL);

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

  // --- return the final data ---
  return data;
};

// --- fetch and log the data ---

fetchRelatedResources(['users', '3', 'albums'])
  .then((data) => log('/users/3/albums', data))
  .catch((err) => log('/users/3/albums', err));

fetchRelatedResources(['users', '3', 'posts'])
  .then((data) => log('/users/3/posts', data))
  .catch((err) => log('/users/3/posts', err));

fetchRelatedResources(['posts', '5', 'comments'])
  .then((data) => log('/posts/5/comments', data))
  .catch((err) => log('/posts/5/comments', err));

log('= = = =  the call stack is empty  = = = =');

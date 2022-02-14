import { labeledLogger } from '../../../lib/labeled-logger.js';
import { ORIGIN } from '../config.js';

/* Filter with Params

  You can use URL parameters to filter your results before they are returned

*/

const { log } = labeledLogger();

/**
 * Fetches a single resource from a specific type.
 * The resource is selected using a URL query.
 *
 * @async
 * @param {string} resourceType - The param value for accessing the correct resource type.
 * @param {string} key - The query key to use.
 * @param {string} value - The query value to use.
 * @returns {Promise<object[]>} An array of all resources matching the search.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
const fetchWithQueries = async (resourceType, key = '', value = '') => {
  // --- declare your resource's URL ---
  const URL = `${ORIGIN}/${resourceType}?${key}=${value}`;
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

fetchWithQueries('users', 'username', 'Samantha')
  .then((data) => log('/users?username=Samantha', data))
  .catch((err) => log('/users?username=Samantha', err));

fetchWithQueries('posts', 'title', 'qui est esse')
  .then((data) => log('/posts?title=qui%20est%20esse', data))
  .catch((err) => log('/posts?title=qui%20est%20esse', err));

fetchWithQueries('posts', 'id', '2')
  .then((data) => log('/posts?id=2', data))
  .catch((err) => log('/posts?id=2', err));

fetchWithQueries('comments', 'postId', '3')
  .then((data) => log('/comments?postId=3', data))
  .catch((err) => log('/comments?postId=3', err));

log('= = = =  the call stack is empty  = = = =');

import { origin } from '../origin.js';

/**
 * Fetches all the resources matching a specific search query.
 *
 * @async
 * @param {string} [resourceType=''] - The resource type to fetch.
 * @param {string} [searchQuery=''] - The text to search for in the resource entries.
 * @returns {Promise<array>} An array of resources matching the search query.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const searchResources = async (resourceType = '', searchQuery = '') => {
  // --- declare your resource's URL ---
  // hint: ctr-f "?q=" -> https://github.com/typicode/json-server
  const URL = _;

  // --- fetch, validate and parse the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  // --- return the final data ---
  return data;
};

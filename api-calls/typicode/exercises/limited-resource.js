import { origin } from '../origin.js';

/**
 * Fetches a certain number of entries from one resource type.
 *
 * @async
 * @param {string} [resourceType=''] - The resource type to fetch.
 * @param {number} [limit=1] - The number of items to request.
 * @returns {Promise<array>} A promise that resolves to an array of resources with length `limit`.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const limitedResource = async (resourceType = '', limit = 1) => {
  // --- generate and declare your resource's URL ---
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

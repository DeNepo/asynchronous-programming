import { origin } from '../origin.js';

/**
 * Fetches all of the completed or incomplete todos from the jsonplaceholder.typicode.com API.
 *
 * @async
 * @param {boolean} [completed=true] - Whether to fetch complete or incomplete todos.
 * @returns {Promise<array>} A promise that resolves to an array of todos.
 * @throws {Error} HTTP error! status: {number}
 */
export const todosByCompleted = async () => {
  // --- declare your resource's URL ---
  // use params to fetch only the todos you need
  const URL = _;

  // --- fetch, validate and parse the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  // --- return the data ---
  return data;
};

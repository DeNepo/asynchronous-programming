import { labeledLogger } from '/browser/lib/labeled-logger.js';

import { ORIGIN } from '../config.js';

/**
 * Fetches a specific resource from the typicode jsonplaceholder API.
 *
 * @async
 * @param {...string|number} params - The parameters to append to the URL.
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const typicodeResource = async (...params) => {
  const log = labeledLogger('typicode resource arguments:', params);

  // --- declare your resource's URL ---
  const paramsPath = params.join('/');
  const URL = `${ORIGIN}/${paramsPath}`;

  log('--- fetching a typicode resource ---\n\nURL:', URL);

  // --- fetch, validate and parse the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  log('URL:', URL, '\n\nresponse:', response);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  log('URL:', URL, '\n\ndata:', data);

  // --- return the final data ---
  return data;
};

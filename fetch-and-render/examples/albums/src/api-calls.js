const origin = 'https://jsonplaceholder.typicode.com';

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
  // --- declare your resource's URL ---
  const paramsPath = params.join('/');
  const URL = `${origin}/${paramsPath}`;
  console.log(URL);

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

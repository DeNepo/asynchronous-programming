import { labeledLogger } from '../../../lib/labeled-logger.js';

import { ORIGIN } from '../config.js';

const { log } = labeledLogger();

/**
 * Fetches the pokemon with a specific name.
 *
 * @async
 * @param {string} name - The name of the pokemon to fetch.
 * @returns {Promise<object>} The requested pokemon object.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
const pokemonByName = async (name = '') => {
  // --- declare your resource's URL ---
  // docs: https://pokeapi.co/docs/v2#pokemon-section
  const URL = `${ORIGIN}/pokemon/${name}`;
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

pokemonByName('pikachu')
  .then((data) => log('pikachu', data))
  .catch((err) => log('pikachu', err));

pokemonByName('mew')
  .then((data) => log('mew', data))
  .catch((err) => log('mew', err));

pokemonByName('lickitung')
  .then((data) => log('lickitung', data))
  .catch((err) => log('lickitung', err));

log('= = = =  the call stack is empty  = = = =');

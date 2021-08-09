import { fakeFetch } from '..//lib/fake-fetch.js';

import { describeValue } from './logic/describe-value.js';

/**
 * A function that describes the truthiness of it's argument.
 * The description is returned as a resolved promise.
 *
 * @param {any} value - The value to describe.
 * @returns {Promise<string>} A promise that resolves to either "truey" or "falsey".
 */
export const truthiness = value => {
  const descriptionPromise = fakeFetch(value).then(describeValue);
  return descriptionPromise;
};

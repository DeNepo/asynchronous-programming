import { fakeFetch } from '/browser/lib/fake-fetch.js';

import { describeValue } from './utils/describe-value.js';

/**
 * A function that describes the truthiness of it's argument.
 * The description is returned wrapped in a promise.
 *
 * @async
 * @param {any} value - The value to describe.
 * @returns {Promise<string>} A promise that resolves to either "truey" or "falsey".
 */
export const truthiness = async value => {
  // this line waits asynchronously for fakeFetch to settle
  const resolvedValue = await fakeFetch(value);

  // the rest of the function body executes synchronously!
  const description = describeValue(resolvedValue);

  // the value is not a promise inside the function scope
  //  but becomes one when it is returned!
  return description;
};

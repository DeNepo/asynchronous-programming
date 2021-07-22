import { fakeFetch } from '../../../lib/fake-fetch.js';
import { labeledLogger } from '../../../lib/labeled-logger.js';

const log = labeledLogger(Date.now());

/* `await` instead of `.then`

  you can chain .then's inside the function before returning the promise
  the promise will resolve to the return value of the last .then

*/

// --- declare a function that returns a promise ---

/**
 * A function that describes the truthiness of it's argument.
 * The description is returned wrapped in a promise.
 *
 * @async
 * @param {any} value - The value to describe.
 * @returns {Promise<string>} A promise that resolves to either "truey" or "falsey".
 */
const truthiness = async value => {
  log('1. pretend to fetch the value:', value);
  // this line waits asynchronously for fakeFetch to resolve
  const resolvedValue = await fakeFetch(value);

  // the rest of the function body executes synchronously!
  const castToBoolean = Boolean(resolvedValue);
  const description = castToBoolean + 'y';
  log(`2: ${resolvedValue} -> ${description}`);

  // the value is not a promise inside the function scope
  //  but becomes one when it is returned!
  log('3. return description as a promise:', description);
  return description;
};

// --- use the async function that returns a promise ---

truthiness(1)
  .then(description => log('+ resolved:', description))
  .catch(error => log('- rejected:', error));

truthiness(0)
  .then(description => log('+ resolved:', description))
  .catch(error => log('- rejected:', error));

log('= = = =  the call stack is empty  = = = =');

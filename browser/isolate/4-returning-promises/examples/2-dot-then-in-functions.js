import { fakeFetch } from '/browser/lib/fake-fetch.js';
import { labeledLogger } from '/browser/lib/labeled-logger.js';

const log = labeledLogger();

/* .then in functions

  you can chain .then's inside the function before returning the promise
  the promise will resolve to the return value of the last .then

*/

// --- declare a function that returns a promise ---

/**
 * A function that describes the truthiness of it's argument.
 * The description is returned as a resolved promise.
 *
 * @param {any} value - The value to describe.
 * @returns {Promise<string>} A promise that resolves to either "truey" or "falsey".
 */
const truthiness = value => {
  log('1. fetch then describe the value:', value);
  const descriptionPromise = fakeFetch(value).then(resolvedValue => {
    const castToBoolean = Boolean(resolvedValue);
    const description = castToBoolean + 'y';
    log(`3: ${resolvedValue} -> ${description}`);
    return description;
  });

  log('2. return promise describing:', value);
  return descriptionPromise;
};

// --- use the function that returns a promise ---

truthiness(1)
  .then(description => log('+ resolved:', description))
  .catch(error => log('- rejected:', error));

truthiness(0)
  .then(description => log('+ resolved:', description))
  .catch(error => log('- rejected:', error));

log('= = = =  the call stack is empty  = = = =');

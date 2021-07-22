import { fakeFetch } from '../../../lib/fake-fetch.js';
import { labeledLogger } from '../../../lib/labeled-logger.js';

const log = labeledLogger(Date.now());

/* refactoring callbacks

  if your .then callbacks are pure functions, you can refactor them!
  this has a few benefits:
    - your main function (`truthiness`) can be easier to read
    - you can keep each file smaller and easier to understand
    - you can test the callbacks
    - you can reuse your callback logic in different files

  this is a lot of code in one file, it can be tricky to understand
  check out the next example to see it split into separate files

*/

// --- declare callbacks ---
//  these are logic functions!
//  you can write tests for them and store them in a separate folder

/**
 * Describes a value as either "truey" or "falsey".
 *
 * @param {any} toDescribe - A value to describe as "truey" or "falsey".
 * @returns {string} "truey" if it's truthy, "falsey" otherwise.
 */
const describeValue = toDescribe => {
  const castToBoolean = Boolean(toDescribe);
  const description = castToBoolean + 'y';
  log(`3. ${toDescribe} -> ${description}`);
  return description;
};

// --- declare a function that returns a promise and uses the callbacks ---

/**
 * A function that describes the truthiness of it's argument.
 * The description is returned as a resolved promise.
 *
 * @param {any} value - The value to describe.
 * @returns {Promise<string>} A promise that resolves to either "truey" or "falsey".
 */
const truthiness = value => {
  log('1. fetch then describe the value:', value);
  const descriptionPromise = fakeFetch(value).then(describeValue);

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

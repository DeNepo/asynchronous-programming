import { fakeFetch } from '/browser/lib/fake-fetch.js';
import { labeledLogger } from '/browser/lib/labeled-logger.js';

const log = labeledLogger();

/* returning a function

  normal functions can return a promise
    you can write .then after the function call
    or assign the return value to a variable and use .then

  you document promises like this:
    {Promise<number>} -> a promise that resolves to a number
    {Promise<string>} -> a promise that resolves to a string
    {Promise<string[]>} -> a promise that resolves to an array of strings

*/

// --- declare a function that returns a promise ---

/**
 * A function that returns a promise resolving to it's argument.
 *
 * @param {any} value - The value to resolve.
 * @returns {Promise<any>} A promise that resolves to the argument.
 */
const tryFetching = (value) => {
  log('1. pretend to fetch the value:', value);
  const valuePromise = fakeFetch(value);

  log('2. return promise resolving to:', value);
  return valuePromise;
};

// --- use the function that returns a promise ---

tryFetching('hello')
  .then((description) => log('+ resolved:', description))
  .catch((error) => log('- rejected:', error));

tryFetching('good bye')
  .then((description) => log('+ resolved:', description))
  .catch((error) => log('- rejected:', error));

log('= = = =  the call stack is empty  = = = =');

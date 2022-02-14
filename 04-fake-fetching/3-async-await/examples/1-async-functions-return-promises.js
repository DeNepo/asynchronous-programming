import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

/*  async functions return promises

  an async function returns a promise, no matter what!
  even if you don't create a promise it will return one

  async functions are special so you should document that they are async

*/

// --- declare an async function ---

/**
 * Returns the argument wrapped in a promise.
 *
 * @async
 * @param {any} value - A value to return.
 * @returns {Promise<any>}
 */
const wrapInPromise = async (value) => {
  debugger;
  // the return value is a promise, you can see this in the debugger
  return value;
};

// --- test the async function ---

log('passing "hello" to async function');
const helloPromise = wrapInPromise('hello');
helloPromise.then((val) => log(val));

log('passing "good bye" to async function');
const goodByePromise = wrapInPromise('good bye');
goodByePromise.then((val) => log(val));

log('= = = =  the call stack is empty  = = = =');

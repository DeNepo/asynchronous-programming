import { labeledLogger } from '/browser/lib/labeled-logger.js';

const log = labeledLogger();

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
  log('return from async function:', value);
  // the return value is a promise, you can see it in the debugger!
  // debugger;
  return value;
};

// --- use the async function ---

const helloPromise = wrapInPromise('hello');
log('helloPromise:', helloPromise);
helloPromise.then((val) => log(val));

const goodByePromise = wrapInPromise('good bye');
log('goodByePromise:', goodByePromise);
goodByePromise.then((val) => log(val));

log('= = = =  the call stack is empty  = = = =');

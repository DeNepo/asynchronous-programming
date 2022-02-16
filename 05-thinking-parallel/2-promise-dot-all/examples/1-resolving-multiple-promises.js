import { labeledLogger } from '../../../lib/labeled-logger.js';
import { delayedValue } from '../../../lib/delayed-value.js';

const { log } = labeledLogger();
const slowString = delayedValue(log);

/* Promise.all()

  you'll often need to do many parallel task at once
    and all of these tasks will be related
  you will want to wait for all of them to finish before moving on

  that's what Promise.all is meant to do!

  Promise.all creates a new promise that resolves to an array of values
    1. you pass in an array of promises
    2. Promise.all will wait for all of them to resolve
    3. then an array of resolved values is passed to .then
      the values will be in the same order as the promises

  Promise.all will resolve when the last promise in the array has resolved
    it will take as long as the slowest promise
    this is parallel programming
    each promise's task is being processed at the same time

  if one of the promises is rejected, then the rest will be ignored
    the entire Promise.all will skip to .catch

*/

// --- create promises and add to an array ---

//   create a bunch of promises
const promiseB = slowString('A');
const promiseA = slowString('B');
const promiseC = slowString('C');
const promiseD = slowString('D');

//   add all promises to an array
const manyPromises = [promiseA, promiseB, promiseC, promiseD];

//  consume them in an array with Promise.all
Promise.all(manyPromises).then(log);

// --- or do everything inline ---

// Promise.all([
//   slowString('W'),
//   slowString('X'),
//   slowString('Y'),
//   slowString('Z'),
// ]).then(log);

log('= = = =  the call stack is empty  = = = =');

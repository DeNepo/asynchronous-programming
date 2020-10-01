'use strict';

const log = labeledLogger('async functions return promises');


/* async functions return promises

  there is no way around it
  the return value of an async function is ALWAYS a promise

  by default the promise will be resolved

*/


// a normal function that returns a promise
const functionReturnPromise = (param) => {
  log('in normal function -', param);
  return Promise.resolve(param);
};


const normalFunctionReturned = functionReturnPromise('hello');
normalFunctionReturned
  .then(hello => log('from normal function:', hello));

log('normalFunctionReturned:', normalFunctionReturned);



// an async function
const asyncFunction = async (param) => {
  log('in async function -', param);
  return param;
};


const asyncFunctionReturned = asyncFunction('bye');
asyncFunctionReturned
  .then(bye => log('from async function:', bye));

log('asyncFunctionReturned:', asyncFunctionReturned);



log('--- all synchronous tasks are complete ---');

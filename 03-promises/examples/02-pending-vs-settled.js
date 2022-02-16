import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

/*
  promises can be in one of three states:
  - pending (not settled):
      neither `resolve` nor `reject` have been called
      no errors have occurred in the executor
  - fulfilled (settled):
      `resolve` was called
  - rejected (settled):
      `reject` was called
      OR an error occured

  if you inspect the promises in your console you will see two things:
    PromiseState: is the promise fulfilled, rejected or pending ?
    PromiseResult : the value passed into `resolve` or `reject`
*/

// always pending
const pendingExecutor = (resolve, reject) => {
  // neither resolve nor reject are called!
  log('in pendingExecutor');
};
const pendingPromise = new Promise(pendingExecutor);
log('always pending, never settled:', pendingPromise);

// settled: fulfilled
const fulfillExecutor = (resolve, reject) => {
  log('in fulfillExecutor');
  resolve('hello from fulfillExecutor!');
};
const fulfilledPromise = new Promise(fulfillExecutor);
log('settled, fulfilled:', fulfilledPromise);

// settled: rejected (intentional)
const rejectExecutor = (resolve, reject) => {
  log('in rejectExecutor');
  reject('good bye from rejectExecutor : (');
};
const rejectedPromise = new Promise(rejectExecutor);
log('settled: rejected (intentional):', rejectedPromise);

// settled: rejected (by error)
const errorExecutor = (resolve, reject) => {
  log('in errorExecutor');
  null();
};
const errorPromise = new Promise(errorExecutor);
log('settled: rejected (by error):', errorPromise);

log('= = = =  the call stack is empty  = = = =');

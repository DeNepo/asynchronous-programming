import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log, error } = labeledLogger();

/* .catch Consumers

  you can handle rejections (also errors) in promises using the .catch consumer
  You do this by calling a method on your promise and passing a callback
    const yourPromise = new Promise(() => {});
    yourPromise.catch(someCallback);

  promises rejections are treated as errors

  Super important!
    consumers are all asynchronous!
    The callback won't be used until AFTER the callstack has cleared
  what?
    whether your promise is rejected or resolved
    whether your executor is synchronous or asynchronous
    your .catch callback will always be executed asynchronously

*/

const logFulfilledValue = (value) => {
  log('fulfilled:', value);
};

const logRejectedValue = (value) => {
  error('rejected:', value);
};

// fulfilled promise
new Promise((resolve) => {
  log('resolve executor'); // 1
  resolve('success!');
})
  .then((val) => logFulfilledValue(val)) // 5
  .catch((val) => logRejectedValue(val));

// rejected promise
new Promise((resolve, reject) => {
  log('reject executor'); // 2
  reject('no success:(');
})
  .then((val) => logFulfilledValue(val))
  .catch((val) => logRejectedValue(val)); // 6

// error in promise
new Promise(() => {
  log('error executor'); // 3
  null();
})
  .then((val) => logFulfilledValue(val))
  .catch((val) => logRejectedValue(val)); // 7

log('= = = =  the call stack is empty  = = = ='); // 4

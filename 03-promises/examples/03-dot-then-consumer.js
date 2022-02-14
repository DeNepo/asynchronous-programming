import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

/* .then Consumer

  Promises are strange things:
    you can't use their values directly
    you can only use them inside of consumers
  so how can you use resolved values?
  You do this by calling a method on your promise and passing a callback
    yourPromise
      .then((resolvedValue) => console.log(resolvedValue));

  the return value from one .then callback passed as an argument to the next
    yourPromise
      .then((userArray) => userArray.length)
      .then((userCount) => console.log(userCount));

  Super important! consumers are all asynchronous!
    The callback won't be used until AFTER the callstack has cleared
  what?
    your .catch callback will always be executed asynchronously like with setTimeout

*/

const logReturn = (value) => {
  log(value);
  return value;
};
const logResolved = (value) => {
  log(value);
};

new Promise((resolve) => {
  log('in executor'); // 1
  resolve('success!');
})
  .then(logReturn) // 3
  .then(logReturn) // 4
  .then(logResolved); // 5

log('= = = =  the call stack is empty  = = = ='); // 2

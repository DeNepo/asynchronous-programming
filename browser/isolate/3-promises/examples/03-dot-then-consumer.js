import { labeledLogger } from '/browser/lib/labeled-logger.js';

const log = labeledLogger();

/* .then Consumer

  Promises are strange things:
    you can's use their values as with normal objects
    you can only use them inside of consumers
  so how can you use resolved values?
  You do this by calling a method on your promise and passing a callback
    yourPromise.then((resolvedValue) => console.log(resolvedValue));

  Super important! consumers are all asynchronous!
    The callback won't be used until AFTER the callstack has cleared
  what?
    your .catch callback will always be executed asynchronously like with setTimeout

*/

const logResolvedValue = value => {
  log(value);
};

new Promise(resolve => {
  log('in executor'); // 1
  resolve('success!');
}).then(val => logResolvedValue(val)); // 3

log('= = = =  the call stack is empty  = = = ='); // 2

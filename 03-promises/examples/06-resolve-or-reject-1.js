import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log, error } = labeledLogger();

/*a

  you can think of consumers as control flow for promises
    if `resolve` is called, .then's callback is executed
    if `reject` is called or an error is thrown, .catch's callback is executed

*/

// resolve/reject based on a random number with if/else
new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  if (randomNumber > 0.5) {
    resolve('random number is greater than 0.5: ' + randomNumber);
  } else {
    reject('random number is less than 0.5: ' + randomNumber);
  }
})
  .then((resolvedValue) => {
    log('resolved value: ', resolvedValue);
  })
  .catch((rejectionValue) => {
    error('rejected value: ', rejectionValue);
  });

log('= = = =  the call stack is empty  = = = =');

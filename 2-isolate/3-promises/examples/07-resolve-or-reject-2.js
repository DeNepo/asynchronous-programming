import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log, error } = labeledLogger();

/* fix the bugs

  you can think of consumers as control flow for promises
    if `resolve` is called, .then's callback is executed
    if `reject` is called or an error is thrown, .catch's callback is executed

*/

// resolve/reject based on user input with if/else
new Promise((resolve, reject) => {
  const userInput = prompt('enter a number');
  const userNumber = Number(userInput);
  const isANumber =
    userInput !== '' && userInput !== null && !Number.isNaN(userNumber);

  if (isANumber) {
    resolve('you entered the number: ' + userNumber);
  } else {
    reject('is not a number: ' + userInput);
  }
})
  .then((resolvedValue) => {
    log('resolved value: ', resolvedValue);
  })
  .catch((rejectionValue) => {
    error('rejected value: ', rejectionValue);
  });

log('= = = =  the call stack is empty  = = = =');

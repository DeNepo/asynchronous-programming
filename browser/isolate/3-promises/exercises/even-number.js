import { labeledLogger } from '/browser/lib/labeled-logger.js';

const log = labeledLogger();

/* Using Promises 2

  all together!

  Try with these input values:
    asdf
    -2
    -1
    0
    1
    2

*/

// declare callbacks
const logSuccessFailure = (resolvedValue) => {
  const finalMessage = resolvedValue ? 'number is even' : 'number is not even';
  log(finalMessage);
};
const mustBeGreaterThanZero = (resolvedValue) => {
  log('checking if ' + resolvedValue + ' is greater than 0');
  if (resolvedValue <= 0) {
    throw new RangeError(resolvedValue + ' is not greater than 0');
  }
  return resolvedValue;
};
const inputANumberExecutor = (resolve, reject) => {
  const userInput = prompt('enter an even number greater than 0');
  const userNumber = Number(userInput);
  const isANumber =
    userInput !== '' && userInput !== null && !Number.isNaN(userNumber);

  if (userNumber !== NaN) {
    logSuccessFailure(userInput);
  } else {
    alert('input is not a number: ' + userInput);
  }
};
const handleRejection = (err) => {
  log('promise was rejected:', err);
};
const isEvenNumber = (resolvedValue) => {
  log('checking if ' + resolvedValue + ' is even');
  return resolvedValue % 2 === 0;
};

// use callbacks
new Promise('asdf')
  .catch(mustBeGreaterThanZero) // is the number greater than zero?
  .catch(isEvenNumber) // is the number even?
  .then(inputANumberExecutor) // log the success/failure of the user's input
  .then(handleRejection); // did an error or rejection occur?

log('= = = =  the call stack is empty  = = = =');

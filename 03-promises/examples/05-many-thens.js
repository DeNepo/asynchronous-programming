import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log, error } = labeledLogger();

/* Many .then's

  you can use as many .then's as you like!
    they will be used in the order you write them

  you can return a value from your .then callbacks
  this value is available as the resolvedValue in your next .then

  a promise's value is the return value from the last .then
    (unless there was an error)

  notice! the logs come in waves:
    all the first .then's
    all the second .then's
    ...
  this is because each .then is like a setTimeout
    they schedule tasks to execute when the callstack is clear

  if an error occurs in any .then it will immediately be caught by .catch

*/

const logAndReturn = (resolvedValue) => {
  log('resolved value: ', resolvedValue);
  return resolvedValue;
};
const handleRejection = (err) => {
  error('promise was rejected: ', err);
};

// resolved to value 5
new Promise((resolve, reject) => {
  log('resolving 5'); // log 1
  resolve(5);
})
  .then((resolved) => logAndReturn(resolved)) // log 5
  .then((value) => typeof value === 'number')
  .then((resolved) => logAndReturn(resolved)) // log 7
  .catch((err) => handleRejection(err));

// resolved to value "hello"
new Promise((resolve, reject) => {
  log('resolving "hello"'); // log 2
  resolve('hello');
})
  .then((resolved) => logAndReturn(resolved)) // log 6
  .then((value) => typeof value === 'number')
  .then((resolved) => logAndReturn(resolved)) // log 8
  .catch((err) => handleRejection(err));

// rejected (will skip all .thens)
new Promise((resolve, reject) => {
  log('rejecting!'); // log 3
  reject(':(');
})
  .then((resolved) => logAndReturn(resolved))
  .then((value) => typeof value === 'number')
  .then((resolved) => logAndReturn(resolved))
  .catch((err) => handleRejection(err)); // log 9

log('= = = =  the call stack is empty  = = = ='); // log 4

import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// you can have setTimeout and setInterval pass arguments to a callback

const callback1 = (message) => {
  log(message);
};
const intervalId = setInterval(callback1, 500, 'hi!');

const callback2 = (arg1, arg2) => {
  log(arg1, arg2);
  clearInterval(intervalId);
};
setTimeout(callback2, 5000, 'good', 'bye');

log('= = = =  the call stack is empty  = = = =');

// // this is a different way to pass arguments to pass arguments in a scheduled task
// setTimeout(() => {
//   callback1('good', 'bye');
// }, 5001);

'use strict';

const log = labeledLogger('6. passing arguments');

// you can pass arguments to your callback via setTimeout and setInterval

let timeoutFinished = false;

const passingArguments_cb_1 = (arg1, arg2) => {
  log(arg1, arg2);
  clearInterval(intervalId);
  timeoutFinished = true;
};
setTimeout(passingArguments_cb_1, 5001, 'good', 'bye');

// // this is a different way to pass arguments to pass arguments in a scheduled task
// setTimeout(() => {
//   passingArguments_cb_1('good', 'bye');
// }, 5001);

const passingArguments_cb_2 = message => {
  if (timeoutFinished) {
    log('this will never happen!');
  } else {
    log(message);
  }
};
const intervalId = setInterval(passingArguments_cb_2, 500, 'hi!');

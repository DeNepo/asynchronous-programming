import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// setting the delay to 0 ms does not make the code execute synchronously
//  it says to wait 0 ms before moving the task to the callback queue
//  the task will be executed after all synchronous tasks are complete

const callback1 = () => {
  log('executing callback 1'); // log 4
};
setTimeout(callback1, 0);
log('scheduled timeout 1'); // log 1

const callback2 = () => {
  log('executing callback 2'); // log 5
};
setTimeout(callback2, 0);
log('scheduled timeout 2'); // log 2

log('= = = =  the call stack is empty  = = = ='); // log 3

import { labeledLogger } from '../../../lib/labeled-logger.js';

/* labeledLogger

  this is a function to (hopefully) help you understand the event loop and asynchronous programming in JS

  it's like console.log but with extra information:
    - label so you can tell which logger was called
    - the time you created the labeled logger
    - how many times you've called the logger
    - the time delay in millisenconds for each logs

  you don't need to understand how the function is implemented
    only how to use it in this folder

*/

// create new loggers with different labels
const log = labeledLogger(Date.now());

// then use them just like console.log!
log('hello');

log('good bye');

// longer time delays
//  (more on this in the coming exercises)
const callback1 = () => {
  log('at least 2000 ms later');
};
setTimeout(callback1, 2000);

const callback2 = () => {
  log('at least 1000 ms later');
};
setTimeout(callback2, 1000);

log('= = = =  the call stack is empty  = = = =');

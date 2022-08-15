import { labeledLogger } from '../../lib/labeled-logger.js';

/* labeledLogger

  this is a function to (hopefully) help you understand the event loop and asynchronous programming in JS

  it's like console.log but with extra information:
    - label so you can tell which logger was called
    - the time you created the labeled logger
    - how many times you've called the logger
    - the time delay in millisenconds for each log
    - the callstack for each log

  clicking on each log's label will show you the callstack at that point
    this is hepful for finding the line of code for each log
    and for knowing if a log is synchronous or asynchronous

  you don't need to understand how the function is implemented
    only how to use it

*/

// create a new logger
const { log, error } = labeledLogger();

// then use it just like console.log!
log('hello');
log('click on this label ^ to see a syncrhonous callstack');

// or like console.error
//  this will be useful for studying promises
error('oops!');

// see how long an asynchronous logging took
//  (more on this in the coming exercises)
const callback1 = () => {
  log('at least 2000 ms later');
};
setTimeout(callback1, 2000);

const callback2 = () => {
  log('at least 1000 ms later');
  log('click on this label ^ to see an asyncrhonous callstack');
};
setTimeout(callback2, 1000);

log('= = = =  the call stack is empty  = = = =');

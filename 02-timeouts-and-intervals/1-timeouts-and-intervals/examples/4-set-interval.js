import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// setInterval takes two arguments:
//  callback: the task to schedule (function)
//  delay: how long to wait before executing the callback (in milliseconds)

// setInterval goes on forever until it's stopped
//  there's a nice button up there called "clear scheduled"
//  it will clear all intervals and timeouts

const callback1 = () => {
  log('hello from interval 1');
};
setInterval(callback1, 500);

log('scheduled interval 1');

const callback2 = () => {
  log('bonjour from interval 2');
};
setInterval(callback2, 1000);

log('scheduled interval 2');

log('= = = =  the call stack is empty  = = = =');

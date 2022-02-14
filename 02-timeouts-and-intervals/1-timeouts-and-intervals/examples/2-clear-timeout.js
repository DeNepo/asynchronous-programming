import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// you can stop a setTimeout from happening using it's id
//  this happens by passing the id as an argument to clearTimeout
//  in the slides, there is also a button to clear all timeouts -->

const callback1 = () => {
  // this one never happens!
  log('in callback 1');
  clearTimeout(timeout2);
};
const timeout1 = setTimeout(callback1, 2000);

log('scheduled timeout 1', timeout1); // log 1

const callback2 = () => {
  log('in callback 2'); // log 4
  clearTimeout(timeout1);
};
const timeout2 = setTimeout(callback2, 1000);

log('scheduled timeout 2', timeout2); // log 2

log('= = = =  the call stack is empty  = = = ='); // log 3

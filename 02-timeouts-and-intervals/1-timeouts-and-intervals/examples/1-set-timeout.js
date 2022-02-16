debugger;

import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// setTimeout takes two arguments:
//  callback: the task to schedule (function)
//  delay: how long to wait before executing the callback (in milliseconds)

// in "callbacks.js"e, the callbacks were executed synchronously on the callstack
//  setTimeout sends your callback around the event loop
//  in other words, it executes your callback asynchronously

const callback1 = () => {
  debugger; // ??!!
  log('hello from timeout 1'); // log 5
};
setTimeout(callback1, 3000);

log('scheduled timeout 1'); // log 1

const callback2 = () => {
  debugger; // ??!!
  log('bonjour from timeout 2'); // log 4
};
setTimeout(callback2, 2000);

log('scheduled timeout 2'); // log 2

log('= = = =  the call stack is empty  = = = ='); // log 3

debugger;

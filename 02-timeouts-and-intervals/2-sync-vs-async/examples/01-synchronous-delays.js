import { labeledLogger } from '../../../lib/labeled-logger.js';
import { synchronousTimeout } from '../../../lib/synchronous-timeout.js';

const { log } = labeledLogger();

/* Synchronous delays

  the code you studied before with setTimeout and setInterval was asynchronous
  it
    1. sends a task out to the event loop
    2. waits at least x milliseconds
    3. checks if the callstack is clear
    4. executes the callback

  You can use the event loop to do other things while waiting
  but what if you want to wait?
  This is called Synchronous
  there aren't many good reasons to do this, but it's nice to explore for learning

  Here's a little function that pauses your program for a certain amount of time
  it has the same parameters as setTimeout but pauses synchronously
    everything in your program will pause until the delay is over

*/

const callback1 = () => {
  log('- end synchronous 1000 ms');
};
log('- begin synchronous 1000 ms');
synchronousTimeout(callback1, 1000);

const callback2 = () => {
  log('- end synchronous 500 ms');
};
log('- begin synchronous 500 ms');
synchronousTimeout(callback2, 500);

const callback3 = () => {
  log('- end synchronous 0 ms');
};
log('- begin synchronous 0 ms');
synchronousTimeout(callback3, 0);

log('= = = =  the call stack is empty  = = = =');

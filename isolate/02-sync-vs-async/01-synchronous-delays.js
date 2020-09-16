'use strict';

const log = labeledLogger('synchronous delays');

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


const synchronousTimeout = function (callback, delay) {
  const end = Date.now() + delay;
  let now = Date.now();
  while (now < end) {
    now = Date.now();
  };
  const callBackArgs = Array.from(arguments).slice(2);
  callback(...callBackArgs);
};


log('- begin sync 1000 ms');
synchronousTimeout(log, 1000, '- end sync 1000 ms');

log('- begin sync 500 ms');
synchronousTimeout(log, 500, '- end sync 500 ms');

log('- begin sync 0 ms');
synchronousTimeout(log, 0, '- end sync 0 ms');




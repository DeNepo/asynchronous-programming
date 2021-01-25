'use strict';

/* Sync vs Async

  This folder contains examples that compare:
    asynchronous scheduling
      code that sends tasks out on the event loop for later
      another term for this is Non-Blocking because it does not stop your program
    synchronous delays
      code that runs on the callstack and takes a long time
      another term for this is Blocking because it prevents your program from doing anything else

  Explore the timed-stamped logs to better understand the connection between:
    the callstack
    the event loop

  To help you understand this difference you'll be exploring this little function:
  it takes the same arguments as setTimeout
  but it pauses synchronously instead of scheduling a task for later

  to help you read the logs:
    + non-blocking (async) logs will include a plus
    - blocking (sync) logs will include a minus

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

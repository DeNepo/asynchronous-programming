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

/**
 * A function with the same signature as `setTimeout`, but with a synchronous delay.
 *
 * @param {*} callback - The function to call when the delay has finished.
 * @param {*} delay - A delay in milliseconds.
 * @param  {...any} callbackArgs - Arguments to pass into the callback.
 */
const synchronousTimeout = (callback, delay, ...callbackArgs) => {
  const end = Date.now() + delay;
  let now = Date.now();
  while (now < end) {
    now = Date.now();
  }

  callback(...callbackArgs);
};

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

const callback = (message) => console.log(message);

console.log('begin synchronous 0 ms');
synchronousTimeout(() => {
  console.log('end synchronous 0 ms');
}, 0);

console.log('schedule async 0 ms');
setTimeout(() => {
  console.log('executing async 0 ms');
}, 0);

console.log('begin synchronous 5000 ms');
synchronousTimeout(() => {
  console.log('end synchronous 5000 ms');
}, 5000);

console.log('schedule async 5000 ms');
setTimeout(() => {
  console.log('executing async 5000 ms');
}, 5000);

console.log('= =  the call stack is empty  = =');

/**
 * This function returns a promise that resolves to a specific value after a given delay.
 *
 * @param {number} [delay=0] - How many milliseconds the promise should be delayed.
 * @param {any} [value=delay] - The value to resolve in the returned promise.
 * @returns {Promise<any>} A promise resolving to the value parameter.
 */
const delayedPromise = (delay = 0, value = delay) => {
  const delayedResolver = (resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  };
  return new Promise(delayedResolver);
};

delayedPromise(100, 'hi 100')
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

delayedPromise(50, 'hi 50')
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

delayedPromise(1000, 'hi 1000')
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

console.log('= =  the call stack is empty  = =');

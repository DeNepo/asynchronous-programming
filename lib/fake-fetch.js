/**
 * This function returns a promise that resolves to a specific value.
 * Careful! you don't know how long it will take, or if it will throw an error
 *
 * @param {any} [value] - The value to resolve in the returned promise.
 * @returns {Promise<any>} A promise resolving to the parameter value.
 *
 * @throws {Error} "oops! something went wrong."
 *  Randomly throws this error 20% of the time.
 */
export const fakeFetch = async value => {
  // randomly fail 1/5 times the function is called
  const failure = Math.random() < 0.2;
  if (failure) {
    throw new Error('oops! something went wrong.');
  }

  // create a random delay time from 0-5000 milliseconds
  const delay = Math.round(Math.random() * 5000);

  // create a new promise that resolves to `value` after the delay
  const slowPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });

  // wait asynchronously for the delay to finish
  const resolvedValue = await slowPromise;

  // return the value, this is will be in a resolved promise!
  //  you can see in in the debugger if you pause on this line
  return resolvedValue;
};

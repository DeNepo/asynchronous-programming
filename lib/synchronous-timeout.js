/**
 * A function with the same signature as `setTimeout`, but with a synchronous delay.
 *
 * @param {*} callback - The function to call when the delay has finished.
 * @param {*} delay - A delay in milliseconds.
 * @param  {...any} callbackArgs - Arguments to pass into the callback.
 */
export const synchronousTimeout = (
  callback = () => {},
  delay = 0,
  ...callbackArgs
) => {
  const end = Date.now() + delay;
  let now = Date.now();

  while (now < end) {
    now = Date.now();
  }

  callback(...callbackArgs);
};

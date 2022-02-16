export const delayedValue = (out = console.log) => {
  /**
   * Logs the delay and the value then waits before returning a promise that resolves to your value.
   *
   * @async
   * @param {*} [value] - The value to resolve.
   * @param {number} delay - Defaults to a random delay between 0 and 4000 ms, in steps of 500 ms.
   * @returns {*} The same value you passed in.
   */
  const delayer = async (
    value,
    delay = Math.round(Math.random() * 8) * 500,
  ) => {
    out(`: ${delay} ms -> `, value);

    await new Promise((resolve) => setTimeout(() => resolve(), delay));

    return value;
  };

  return delayer;
};

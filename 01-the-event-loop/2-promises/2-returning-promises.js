/**
 * This function returns a promise that resolves to a specific value.
 *
 * @param {any} [value=delay] - The value to resolve in the returned promise.
 * @returns {Promise<any>} A promise resolving to the value parameter.
 */
const returnAPromise = (value = 'hello') => {
  const resolvingExecutor = (resolve) => {
    resolve(value);
  };
  return new Promise(resolvingExecutor);
};

returnAPromise('first promise')
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

returnAPromise('second promise')
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

returnAPromise('third promise')
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

console.log('= =  the call stack is empty  = =');

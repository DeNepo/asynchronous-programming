/*
  the examples in this chapter will use the logic in this function

  you use these steps to explore functions that do asynchronous work
    first with normal functions that return promises
    then with functions that use async/await
*/

/**
 * A function that describes the truthiness of it's argument.
 *
 * @param {any} value - The value to describe.
 * @returns {string} Either "truey" or "falsey".
 */
const truthiness = value => {
  console.log('0. the value:', value);

  const castToBoolean = Boolean(value);
  console.log('1. cast to boolean:', castToBoolean);

  const description = castToBoolean + 'y';
  console.log('2. generate description:', description);

  console.log('3. return description');
  return description;
};

const numberFive = truthiness(5);
console.log('---  numberFive:', numberFive);

const stringBye = truthiness('bye');
console.log('---  stringBye:', stringBye);

const booleanFalse = truthiness(false);
console.log('---  booleanFalse:', booleanFalse);

console.log('= = = =  the call stack is empty  = = = =');

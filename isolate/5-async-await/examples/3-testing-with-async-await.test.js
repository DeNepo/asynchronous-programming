import { fakeFetch } from '/lib/fake-fetch.js';

/* testing with async/await

  now that you have `async`/`await` you can easily test functions that return promises!

  to unit test a function that returns a promise you will `async`/`await` with `it`
  the test reporter will wait until the values have resolved before reporting pass or fail


  PS. there are different ways to test functions that return promises
    you're learning only one way for now
    it's the simplest way to get started because the syntax is closest to synchronous testing

*/

/**
 * A function that describes the truthiness of it's argument.
 * The description is returned wrapped in a promise.
 *
 * @async
 * @param {any} value - The value to describe.
 * @returns {Promise<string>} A promise that resolves to either "truey" or "falsey".
 */
const truthiness = async value => {
  // this line waits asynchronously for fakeFetch to settle
  const resolvedValue = await fakeFetch(value);

  // the rest of the function body executes synchronously!
  const castToBoolean = Boolean(resolvedValue);
  const description = castToBoolean + 'y';

  // the value is not a promise inside the function scope
  //  but becomes one when it is returned!
  return description;
};

// you don't know ahead of time which test will finish first!
//  the results are logged after all tests have finished
describe('truthiness says if a value is truthy or falsy', () => {
  describe('it describes falsy values as "falsey', () => {
    // the `it` callback must be an `async` function
    it('0 is "falsey"', async () => {
      // you need to `await` your function's return value
      const actual = await truthiness(0);
      // then you can assert like you normally do
      expect(actual).toEqual('falsey');
    });
    it('"" is "falsey', async () => {
      const actual = await truthiness('');
      expect(actual).toEqual('falsey');
    });
    it('null is "falsey', async () => {
      const actual = await truthiness(null);
      expect(actual).toEqual('falsey');
    });
  });
  describe('it describes truthy values as "truey"', () => {
    it('1 is "truey"', async () => {
      const actual = await truthiness(1);
      expect(actual).toEqual('truey');
    });
    it('"hello" is "truey"', async () => {
      const actual = await truthiness('hello');
      expect(actual).toEqual('truey');
    });
    it('-1 is "truey"', async () => {
      const actual = await truthiness(-1);
      expect(actual).toEqual('truey');
    });
  });
});

import { fakeFetch } from '/browser/lib/fake-fetch.js';

/*

  you will also want to give helpful feedback when the program is asynchronous

  if the program returns a promise this can be done using `.then` and `.catch`

*/

// --- declare a function to use later ---

/**
 * This function checks if a string includes an upper or lower case "x".
 *
 * @async
 * @param {string} [text=''] - A string to check for x's, upper or lower case.
 * @returns {Promise<boolean>} Does the string include an "x" or "X"?
 */
const includesAnX = async (text = '') => {
  // check if the text includes an "x"
  const itDoesIncludeX = text.toLowerCase().includes('x');

  // wait asynchronously for fakeFetch to settle
  return await fakeFetch(itDoesIncludeX);
};

// --- main program, use the function ---

const userInput = prompt('enter some text to learn if it includes an "x".');

includesAnX(userInput)
  .then((itDoes) => {
    const doesOrNot = itDoes ? 'does' : 'does not';
    alert(`"${userInput}" ${doesOrNot} include an "x"`);
  })
  .catch((err) => {
    console.error(err);

    // works for this example, it is not a general solution
    if (err instanceof TypeError) {
      // if the error was a TypeError, the user canceled
      //  this error occurs when trying to read a property on `null`
      alert('oops! looks like you canceled');
    } else {
      // any other error occurred in `fakeFetch`
      //  these errors are out of your control
      //  all you can do is make suer the user is happy
      alert('there was an error processing your text, please try again');
    }
  });

console.log('= = = =  the call stack is empty  = = = =');

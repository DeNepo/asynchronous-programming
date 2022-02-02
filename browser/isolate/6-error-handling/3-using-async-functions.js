import { fakeFetch } from '/browser/lib/fake-fetch.js';

/*

  you can also do the same thing with an `async` function

  you will do something like this inside of your handlers
    check out /fetch-and-render for some practice

*/

// --- declare functions ---

/**
 * Prompts a user for some text and processes it using `includesAnX`.
 * Errors are handled in a helpful way (hopefully).
 *
 * @async
 */
const includesAnX = async (text = '') => {
  // check if the text includes an "x"
  const itDoesIncludeX = text.toLowerCase().includes('x');

  // wait asynchronously for fakeFetch to settle
  return await fakeFetch(itDoesIncludeX);
};

const handleInput = async () => {
  const userInput = prompt('enter some text to learn if it includes an "x".');

  try {
    const itDoes = await includesAnX(userInput);

    const doesOrNot = itDoes ? 'does' : 'does not';
    alert(`"${userInput}" ${doesOrNot} include an "x"`);
  } catch (err) {
    console.error(err);

    if (err instanceof TypeError) {
      alert('oops! looks like you canceled');
    } else {
      alert('there was an error processing your text, please try again');
    }
  }
};

// --- main program, use the functions ---

handleInput();
handleInput();
handleInput();

console.log('= = = =  the call stack is empty  = = = =');

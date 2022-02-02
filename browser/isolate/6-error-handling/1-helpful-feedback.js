/* Helpful Feedback

  errors happen a lot when you are fetching data from APIs
  often those errors are not your fault
    they can happen in the API you are calling
    the internet connection can be bad
    ...

  you want to handle these errors in a way that is helpful for the user
  often this means rendering a friendly message that something went wrong

  consider this synchronous example that doesn't use promises:

*/

// if the user cancels, their input is null
const userInput = prompt('enter some text to learn if it includes an "x".');

try {
  // check if it includes an "x"
  //  if than error occurs, they must have canceled
  const itDoes = userInput.toLowerCase().includes('x');

  // if it succeeds, let them know if it includes an "x" or not
  const doesOrNot = itDoes ? 'does' : 'does not';
  alert(`"${userInput}" ${doesOrNot} include an "x"`);

} catch (err) {
  // if an error occurred the user must have canceled
  //  instead of the program just ending, let them know what happened
  alert('oops! looks like you canceled');

  // and log the error
  console.error(err);
}

// PS. there is a chapter on `try`/`catch` in behavior-strategy-implementation

log('= = = =  the call stack is empty  = = = =');

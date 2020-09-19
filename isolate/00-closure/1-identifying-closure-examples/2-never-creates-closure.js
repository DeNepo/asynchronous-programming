'use strict';

// any function that returns a new function creates a closure
// returning a function that was passed as an argument does not create a closure
// the returned function must be declared inside the function call ("frame" on js tutor)

const doesItClose = (func, arg) => {
  const returned = func(arg);
  const returnedAFunction = typeof returned === 'function';
  const returnedArgument = arg === returned;

  const createsAClosure = returnedAFunction && !returnedArgument;
  return createsAClosure;
}

const never = (x) => {
  return x;
}

const whenPassed4 = doesItClose(never, 4);
console.assert(whenPassed4 === _, "... when passed 4");

const whenPassedAFunction = doesItClose(never, () => { });
console.assert(whenPassedAFunction === _, "... when passed a function");

const whenPassedAnArray = doesItClose(never, []);
console.assert(whenPassedAnArray === _, "... when passed an array");

const whenPassedItself = doesItClose(never, never);
console.assert(whenPassedItself === _, "... when passed itself");

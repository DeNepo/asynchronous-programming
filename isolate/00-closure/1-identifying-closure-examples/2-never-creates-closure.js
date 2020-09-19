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
console.assert(whenPassed4 === false, "... when passed 4");

const whenPassedAFunction = doesItClose(never, () => { });
console.assert(whenPassedAFunction === false, "... when passed a function");

const whenPassedAnArray = doesItClose(never, []);
console.assert(whenPassedAnArray === false, "... when passed an array");

const whenPassedItself = doesItClose(never, never);
console.assert(whenPassedItself === false, "... when passed itself");

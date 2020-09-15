'use strict';

/* In JavaScript, you can pass functions as arguments
  It will take some practice to wrap your head around
  once you get it, you will be free!

  Functions passed as arguments are called "callbacks"
  this word is often used to talk about asynchronous code
    so careful with your googling!
  for now, a callback is just a function passed as an argument
*/


const printHello = () => {
  console.trace('hello');
};
const printGoodbye = () => {
  console.trace('goodbye');
};

/**
 * calls it's two parameters in order, first then second
 * @param {Function} first
 * @param {Function} second
 * @returns {undefined}
 */
const callTwoFunctions = (first, second) => {
  first();
  second();
};

console.log('--- first hello, then goodbye ---')
callTwoFunctions(printHello, printGoodbye);


console.log('--- first goodbye, then hello ---');
callTwoFunctions(printGoodbye, printHello);

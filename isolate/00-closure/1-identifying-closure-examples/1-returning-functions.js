'use strict';

// functions can return functions that were passed as arguments

const argFunc = () => { };

const returnsOldFunction = (x) => {
  return x
}; // does not create a closure

const sameFunctionAsArgument = returnsOldFunction(argFunc);
const test1 = sameFunctionAsArgument === argFunc;
console.assert(test1,
  'no closure created, the returned function was declared outside of "returnsOldfunction"');;


const returnsNewFunction = (x) => {
  return () => {
    console.log(x)
  };
}
const newFunction = returnsNewFunction("hi!");
const test2 = newFunction !== argFunc;
console.assert(test2,
  'a closure is created! the returned function was declared inside of "returnsNewFunction"');

// study this function call in JS Tutor and debugger to see closure in action:
newFunction();

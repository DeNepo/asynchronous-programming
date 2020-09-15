'use strict';

/* error messages printed to the console log the callstack
  study this example in the debugger
  compare what you see in the "callstack" tab to what's logged
*/


let depth = 0;

const func1 = () => {
  console.log('entering func 1');
  depth++;
  if (depth === 3) {
    throw new Error('read the callstack!');
  }
  depth--;
  console.log('leaving func 1');
};

console.log('this callstack is 1 call deep');
func1();


const func2 = () => {
  console.log('entering func 2');
  depth++;
  func1();
  depth--;
  console.log('leaving func 2');
};

// it's backwards from what you might expect
//  2 will open first, but 1 will close first
console.log('this callstack is 2 calls deep');
func2();



const func3 = () => {
  console.log('entering func 3');
  depth++;
  func2();
  depth--;
  console.log('leaving func 3');
};

console.log('this callstack is 3 calls deep');
func3();

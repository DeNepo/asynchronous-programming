'use strict';

/* console.trace

  this is a handy console method for debugging
  it works just like console.log except:

    it also logs the current callstack

*/

let depth = 0;


const func1 = () => {
  depth++;
  console.trace("depth:", depth);
  depth--;
};

console.trace('depth:', depth);
func1();



const func2 = () => {
  depth++;
  console.trace("depth:", depth);
  func1();
  console.trace("depth:", depth);
  depth--;
};

// it's backwards from what you might expect
//  2 will open first, but 1 will close first
console.trace('depth:', depth);
func2();



const func3 = () => {
  depth++;
  console.trace("depth:", depth);
  func2();
  console.trace("depth:", depth);
  depth--;
};

console.trace('depth:', depth);
func3();

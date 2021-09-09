'use strict';

// let's get started

// Command Line Arguments are arguments you pass to your program at runtime.
// It is data the program receives from outside itself.

// process.argv is an array where the program stores these arguments for you to use
console.log('all args');
console.log(Array.isArray(process.argv));
console.log(process.argv);

// You'll notice the first 2 arguments are special.
// They are always present, even if you don't provide any arguments.
// These arguments can be used by the program to know how and from where
// it was run. What it can do with this information is currently out of scope
// but have a look at this excellent _____ to get a better idea.
// Right now we'll always start reading from the 3rd argument onwards.

// process.argv is an "array-like" object. It's not exactly an array
// but we can call certain methods on it like `slice`. Here we're getting all
// elements from the 3rd element onwards
const userProvidedArgs = process.argv.slice(2);

console.log('user args');
console.log(userProvidedArgs);

// run this program with different args and different number of args
// (yes, there can be more than one!) to see the output change.

// now let's try to make our program say "Hello!" to someone.

const name = userProvidedArgs[0];
console.assert(
  typeof name === 'string',
  'command line arguments are always strings!',
);

// but wait! what if the user didn't provide any arguments?
// That could be an error and we should check for it.

if (!name) {
  console.log(`Can't say hello, you did not give me a name 🙁️`);
  process.exit(1);
}

console.log(`Hello ${name}! 🤗`);

'use strict';

// callbacks are functions passed as arguments to other functions
//  the main function will execute the callback when it's work is done
//  callbacks can be used to make sure tasks happen in the correct order

const usesACallback = (cb, cbArg) => {
  console.trace('using ' + cb.name);
  cb(cbArg);
};


const callback1 = (msg) => {
  console.trace(msg);
};


const callback2 = (msg) => {
  console.trace(msg);
};


console.trace('before using 1');
usesACallback(callback1, 'hi!');

console.trace('before using 2');
usesACallback(callback2, 'bye');

console.trace('all done');

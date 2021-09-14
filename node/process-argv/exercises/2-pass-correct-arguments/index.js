'use strict';

/* hint: how can you pass an argument with a space in it? */

// require built-in modules
const assert = require('assert');
// require local modules
const listify = require('./listify');

// process user input
const userInput = process.argv.slice(2);
console.log('user input:', userInput);

// pass input to the function
const listifiedInput = listify(userInput);
console.log('listified input:', listifiedInput);

// test the input
const expected = `- white cow
- red cape
- yellow hair
- gold slipper`;

assert.strictEqual(listifiedInput, expected);

console.log('PASS!');

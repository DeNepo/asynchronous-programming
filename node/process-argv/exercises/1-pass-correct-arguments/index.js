'use strict';

/* pass the correct command line arguments to pass these tests */

// require built-in modules
const assert = require('assert');

// process user input
const userArguments = process.argv.slice(2);

// test the input
console.log('it should have length 3');
assert.strictEqual(userArguments.length, 3);

console.log('the first one is "gorgeous"');
assert.strictEqual(userArguments[0], 'gorgeous');

console.log('the second one is "spiced"');
assert.strictEqual(userArguments[1], 'spiced');

console.log('the third one is "potato"');
assert.strictEqual(userArguments[2], 'potato');

console.log('together they are: ["gorgeous", "spiced", "potato"]');
assert.deepStrictEqual(userArguments, ['gorgeous', 'spiced', 'potato']);

console.log('PASS!');

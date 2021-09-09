const assert = require('assert');

/* assert.ok
  For these exercises you will be using the 'assert' library that comes with Node.js
  this is not the same as console.assert!
  console.assert & assert.ok is similar but have one key difference:
  - console.assert:
    if the first argument is falsey
      it will print your message to the console
      and the program will continue
    if the first argument is truthy
      nothing happens
  - assert.ok:
    if the first argument is falsey
      it will throw an error and stop your program at that line of code
      it will print your message (or a default message) to the console
    if the first argument is truthy
      nothing happens
  The purpose of asserting is to prove to yourself and others that your code does what it should
  It will take some discipline to program like this, but in the long run it will more than pay off
*/

// 'assert.ok throws an error if the first argument is falsey'
try {
  assert.ok(0);
} catch (err) {
  console.log(err);
}

// 'and does nothing if the first argument is truthy'
assert.ok(1);

// 'pass a string as a second argument, that will be printed'
try {
  assert.ok(0, 'zero is falsey');
} catch (err) {
  console.log(err);
}

// 'and it still does nothing if the first argument is truthy'
assert.ok(1, '1 is truthy');

// 'how assert.ok vs. console.assert'
// 'both do nothing if the first argument is truthy'
console.assert(1, '1 is truthy');
assert.ok(1, '1 is truthy');

// 'if the first argument is falsey, assert.ok() throws an error ...'
try {
  assert.ok(0, '0 is falsey');
} catch (err) {
  console.log(err);
}

// ... but console.assert doesn't
console.assert(0, '0 is falsey');

// `be aware of NaN!`
assert.ok(NaN !== NaN);

try {
  assert.ok(NaN === NaN);
} catch (err) {
  console.log(err);
}

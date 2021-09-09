const assert = require('assert');

// When one of these assertions fail they create a very helpful error message
//  type of assertion
//  comparison between the actual and expected values
//  line number

// 'assert.strictEqual(a, b), like using ==='

// `assert.strictEqual(a, b) checks if two values are strictly equal`
// the first argument is the value we're testing
// the second argument is the value we expect
assert.strictEqual(1, 1);

// `throws an error if they are NOT strictly `
try {
  assert.strictEqual('1', 1);
} catch (err) {
  console.log(err);
}

// strict assertions work for NaN!
// this code won't throw an error
assert.strictEqual(NaN, NaN);

// 'assert.notStrictEqual(a, b), like using !=='

// `assert.notStrictEqual(a, b) checks if two values are NOT strictly equal`
assert.notStrictEqual('1', 1);

// `throws an error if they ARE strictly equal`
try {
  assert.notStrictEqual(1, 1);
} catch (err) {
  console.log(err);
}

// again, strict assertions work for NaN!
try {
  assert.notStrictEqual(NaN, NaN);
} catch (err) {
  console.log(err);
}

const assert = require('assert');

// `assert.deepStrictEqual(a, b)`
// `a` and `b` can be any data structures:
// simple objects, complex objects, arrays
// deepStrictEqual will compare their values
// and decide if they are equal.

// `checks if all key/value pairs in an object are the same`
assert.deepStrictEqual({ a: 2, b: 3 }, { b: 3, a: 2 });
try {
  assert.deepStrictEqual({ a: 2, b: 3 }, { a: 2, b: 4 });
} catch (err) {
  console.log(err);
}

// `checks if all the items in an array are the same`
assert.deepStrictEqual([2, 3], [2, 3]);
try {
  assert.deepStrictEqual([2, 3], [3, 3]);
} catch (err) {
  console.log(err);
}

// `can compare nested data structures`

assert.deepStrictEqual({ b: ['x', 'y'], a: 2 }, { b: ['x', 'y'], a: 2 });
try {
  assert.deepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'z'] });
} catch (err) {
  console.log(err);
}

assert.deepStrictEqual([{ x: 2 }, { x: 3 }], [{ x: 2 }, { x: 3 }]);
try {
  assert.deepStrictEqual([{ x: 2 }, { x: 'y' }], [{ x: 2 }, { x: 3 }]);
} catch (err) {
  console.log(err);
}

// `assert.notDeepStrictEqual(a, b)`

// `checks if ANY key/value pair in two objects are different`
assert.notDeepStrictEqual({ a: 2, b: 3 }, { a: 2, b: 4 });
try {
  assert.notDeepStrictEqual({ a: 2, b: 3 }, { b: 3, a: 2 });
} catch (err) {
  console.log(err);
}

// `checks if all ANY value in two arrays are the different`
assert.notDeepStrictEqual([2, 3], [3, 3]);
try {
  assert.notDeepStrictEqual([2, 3], [2, 3]);
} catch (err) {
  console.log(err);
}

// `can compare nested data structures (1)`
assert.notDeepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'z'] });
try {
  assert.notDeepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'y'] });
} catch (err) {
  console.log(err);
}

// `can compare nested data structures (2)`
assert.notDeepStrictEqual([{ x: 2 }, { x: 4 }], [{ x: 2 }, { x: 3 }]);
try {
  assert.notDeepStrictEqual([{ x: 2 }, { x: 3 }], [{ x: 2 }, { x: 3 }]);
} catch (err) {
  console.log(err);
}

// deep strict assertion also works for Nan!

assert.deepStrictEqual({ a: 2, b: NaN }, { a: 2, b: NaN });

try {
  assert.notDeepStrictEqual({ a: 2, b: NaN }, { a: 2, b: NaN });
} catch (err) {
  console.log(err);
}

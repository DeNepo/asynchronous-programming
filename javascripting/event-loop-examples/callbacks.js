const title = 'callbacks';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;


// callbacks are functions passed as arguments to other functions
//  the main function will execute the callback when it's work is done
//  callbacks can be used to make sure tasks happen in the correct order

const usesACallback = (cb, cbArg) => {
  count++;
  const cbName = cb.name;
  console.assert(true, assertMsg(cbName));
  cb(cbArg);
};

let count = 0;

const callbacks_cb_1 = (msg) => {
  ++count;
  const test1 = count === 2;
  console.assert(test1, assertMsg('Test 1 (' + msg + ')'));
};
usesACallback(callbacks_cb_1, 'hi!');

++count;
const test2 = count === 3;
console.assert(test2, assertMsg('Test 2'));

const callbacks_cb_2 = (msg) => {
  ++count;
  const test3 = count === 5;
  console.assert(test3, assertMsg('Test 3 (' + msg + ')'));
};
usesACallback(callbacks_cb_2, 'bye');

++count;
const test4 = count === 6;
console.assert(test4, assertMsg('Test 4'));


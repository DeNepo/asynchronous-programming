const title = 'setTimeout';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// setTimeout takes two arguments:
//  callback: the task to schedule (function)
//  delay: how long to wait before executing the callback (in milliseconds)

// in "callbacks.js"e, the callbacks were executed synchronously on the callstack
//  setTimeout sends your callback around the event loop
//  in other words, it executes your callback asynchronously

let count = 0;

const setTimeout_cb_1 = () => {
  ++count;
  const test1 = count === 4;
  console.assert(test1, assertMsg('Test 1'));
};
setTimeout(setTimeout_cb_1, 3000);

++count;
const test2 = count === 1;
console.assert(test2, assertMsg('Test 2'));

const setTimeout_cb_2 = () => {
  ++count;
  const test3 = count === 3;
  console.assert(test3, assertMsg('Test 3'));
};
setTimeout(setTimeout_cb_2, 2000);

++count;
const test4 = count === 2;
console.assert(test4, assertMsg('Test 4'));


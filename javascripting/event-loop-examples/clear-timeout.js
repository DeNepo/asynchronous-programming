const title = 'clearTimeout';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// you can stop a setTimeout from happening using it's id
//  this happens by passing the id as an argument to clearTimeout
//  in the slides, there is also a button to clear all timeouts -->

let count = 0;

const setTimeout_cb_1 = () => {
  ++count;
  const test1 = count === 'this one never happens!';
  console.assert(test1, assertMsg('Test 1'));
  clearTimeout(timeout2);
};
const timeout1 = setTimeout(setTimeout_cb_1, 2000);

++count;
const test2 = count === 1;
console.assert(test2, assertMsg('Test 2'));

const setTimeout_cb_2 = () => {
  ++count;
  const test3 = count === 3;
  console.assert(test3, assertMsg('Test 3'));
  clearTimeout(timeout1);
};
const timeout2 = setTimeout(setTimeout_cb_2, 1000);

++count;
const test4 = count === 2;
console.assert(test4, assertMsg('Test 4'));


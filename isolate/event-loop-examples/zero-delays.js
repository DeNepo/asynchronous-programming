const title = 'zero delays';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// setting the delay to 0 ms does not make the code execute synchronously
// it says to wait 0 ms before moving the task to the callback queue


let count = 0;

const zeroDelays_cb_1 = () => {
  ++count;
  const test1 = count === 3;
  console.assert(test1, assertMsg('Test 1'));
};
setTimeout(zeroDelays_cb_1, 0);

++count;
const test2 = count === 1;
console.assert(test2, assertMsg('Test 2'));

const zeroDelays_cb_2 = () => {
  ++count;
  const test3 = count === 4;
  console.assert(test3, assertMsg('Test 3'));
};
setTimeout(zeroDelays_cb_2, 0);

++count;
const test4 = count === 2;
console.assert(test4, assertMsg('Test 4'));


const title = 'clearInterval';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// you can also stop a setInterval using it's id
//  this happens by passing the id as an argument to clearTimeout

let count = 0;
let timeoutFinished = false;

setTimeout(function clearInterval_cb_2() {
  const test1 = count === 10;
  console.assert(test1, assertMsg('Test 1'));
  clearInterval(intervalId);
  timeoutFinished = true;
}, 5000);

const intervalId = setInterval(function clearInterval_cb_1() {
  ++count;
  if (timeoutFinished) {
    console.assert(false, assertMsg(':('));
  } else {
    console.assert(true, assertMsg('hi!'));
  };
}, 500);

// setTimeout(function clearInterval_cb_2() {
//   const test1 = count === 10;
//   console.assert(test1, assertMsg('Test 1'));
//   clearInterval(intervalId);
//   timeoutFinished = true;
// }, 5000);

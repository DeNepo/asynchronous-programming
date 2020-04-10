const title = 'clearInterval';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// you can also stop a setInterval using it's id
//  this happens by passing the id as an argument to clearTimeout

let count = 0;
let timeoutFinished = false;


const clearInterval_cb_1 = () => {
  const test1 = count === 10;
  console.assert(test1, assertMsg('Test 1'));
  clearInterval(intervalId);
  timeoutFinished = true;
};
setTimeout(clearInterval_cb_1, 5001); // what happens if you change this to 5000?


const clearInterval_cb_2 = () => {
  ++count;
  if (timeoutFinished) {
    console.assert(false, assertMsg(':( this should never happen'));
  } else {
    console.assert(true, assertMsg('hi!'));
  }
};
const intervalId = setInterval(clearInterval_cb_2, 500);


const title = 'passing arguments';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// you can pass arguments to your callback via setTimeout and setInterval

let count = 0;
let timeoutFinished = false;


const passingArguments_cb_1 = (msg) => {
  const test1 = count === 10;
  console.assert(test1, assertMsg('Test 1 (' + msg + ')'));
  clearInterval(intervalId);
  timeoutFinished = true;
};
setTimeout(passingArguments_cb_1, 5001, 'good bye');


const passingArguments_cb_2 = (msg) => {
  ++count;
  if (timeoutFinished) {
    console.assert(false, assertMsg(':( this should never happen'));
  } else {
    console.assert(true, assertMsg(msg));
  }
};
const intervalId = setInterval(passingArguments_cb_2, 500, 'hi!');


const title = 'exercise 4';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

let intervals = 0;
let timeouts = 0;

// fill in the blanks

const timeout_cb_exercise4 = () => {
  const test = intervals === (timeouts * 3);
  console.assert(test, assertMsg('Time Out ' + timeouts));
  timeouts++;
};
setTimeout(timeout_cb_exercise4, _);

const interval_cb_exercise4 = () => {
  const test = intervals <= (timeouts * 3);
  console.assert(test, assertMsg('Interval ' + intervals));
  if (intervals === (timeouts * 3) - 1) {
    setTimeout(timeout_cb_exercise4, _);
  }
  intervals++;
};
setInterval(interval_cb_exercise4, _);

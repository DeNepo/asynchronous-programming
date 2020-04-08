const title = 'setInterval';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// setInterval takes two arguments:
//  callback: the task to schedule (function)
//  delay: how long to wait before executing the callback (in milliseconds)

// setInterval goes on forever until it's stopped
//  in the slides, there is also a button to clear all intervals -->
//  this will come in handy


const setInterval_cb_1 = () => console.assert(true, assertMsg('hello'));
setInterval(setInterval_cb_1, 500);

const setInterval_cb_2 = () => console.assert(true, assertMsg('bonjour'));
setInterval(setInterval_cb_2, 1000);

// setTimeout takes two arguments:
//  callback: the task to schedule (function)
//  delay: how long to wait before executing the callback (in milliseconds)

// in "callbacks.js"e, the callbacks were executed synchronously on the callstack
//  setTimeout sends your callback around the event loop
//  in other words, it executes your callback asynchronously

const callback1 = () => {
  console.log('hello from timeout 1');
};
setTimeout(callback1, 3000);

console.log('scheduled timeout 1');

const callback2 = () => {
  console.log('bonjour from timeout 2');
};
setTimeout(callback2, 2000);

console.log('scheduled timeout 2');

console.log('= =  the call stack is empty  = =');

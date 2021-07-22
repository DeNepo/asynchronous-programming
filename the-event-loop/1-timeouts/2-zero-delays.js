// setting the delay to 0 ms does not make the code execute synchronously
//  it says to wait 0 ms before moving the task to the task queue
//  the task will be executed after the event loop is clear

const callback1 = () => {
  console.log('executing callback 1');
};

console.log('scheduling timeout 1');
setTimeout(callback1, 0);

const callback2 = () => {
  console.log('executing callback 2');
};

console.log('scheduling timeout 2');
setTimeout(callback2, 0);

console.log('= =  the call stack is empty  = =');

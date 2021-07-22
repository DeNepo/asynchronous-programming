// you can pass arguments to your callback via setTimeout

const callback = (arg1, arg2) => {
  console.log(`${arg1} ${arg2}`);
};

setTimeout(callback, 5000, 'good', 'bye');

console.log('= =  the call stack is empty  = =');

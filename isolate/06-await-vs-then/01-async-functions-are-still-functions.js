const log = labeledLogger('async functions are still functions');

const asyncFunction = async (value) => {
  log(value);
};


asyncFunction(3);
asyncFunction('hello');
asyncFunction([1, 2, 3]);
asyncFunction({ a: 'x', b: 'y' });


log('--- end of synchronous tasks ---');

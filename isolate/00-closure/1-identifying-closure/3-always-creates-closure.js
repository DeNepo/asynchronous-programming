'use strict';

// any function that returns a new function creates a closure
// returning a function that was passed as an argument does not create a closure
// the returned function must be declared inside the function call ("frame" on js tutor)

const doesItClose = (func, arg) => {
  const returned = func(arg);
  const returnedAFunction = typeof returned === 'function';
  const returnedArgument = arg === returned;

  const createsAClosure = returnedAFunction && !returnedArgument;
  return createsAClosure;
}

const always = (x) => {
  return () => {
    console.trace(x);
  };
}

const whenPassed4 = doesItClose(always, 4);
const alwaysLogs4 = always(4);

const whenPassedAFunction = doesItClose(always, 'hi');
const alwaysLogsHi = always('hi');

const whenPassedAnArray = doesItClose(always, []);
const alwaysLogsArray = always([]);

const whenPassedItself = doesItClose(always, always);
const alwaysLogsAlways = always(always);

alwaysLogs4();
alwaysLogsHi();
alwaysLogsArray();
alwaysLogsAlways();

alwaysLogs4();
alwaysLogsHi();
alwaysLogsArray();
alwaysLogsAlways();

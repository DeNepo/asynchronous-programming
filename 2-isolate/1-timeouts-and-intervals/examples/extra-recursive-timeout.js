import { labeledLogger } from '/browser/lib/labeled-logger.js';

const { log } = labeledLogger();

// you can make a timeout work like an interval with a recursive callback

const delay = 500;
const totalSteps = 10;

const callback = (currentStep) => {
  log('step ', currentStep);
  if (currentStep === 0) {
    // base case
    clearTimeout(timeoutId);
  } else {
    // recursive case
    const nextStep = currentStep - 1;
    timeoutId = setTimeout(callback, delay, nextStep);
  }
};
let timeoutId = setTimeout(callback, delay, totalSteps);
log('scheduled timeout', timeoutId);

log('= = = =  the call stack is empty  = = = =');

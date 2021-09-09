import { labeledLogger } from '/browser/lib/labeled-logger.js';

const log = labeledLogger();

// fill in the blanks

let x = '';

x += _;

const callback1 = () => {
  x += 'ri';
  log('cb 1:', x);
};
setTimeout(callback1, _);

x += _;

const callback2 = () => {
  const test = x === 'javascript';
  log('cb 2:', test);
  console.assert(test, 'x should be "javascript"');
};
setTimeout(callback2, _);

const callback3 = () => {
  x += 'sc';
  log('cb 3:', x);
};
setTimeout(callback3, _);

const callback4 = () => {
  x += 'pt';
  log('cb 4:', x);
};
setTimeout(callback4, _);

x += _;

log(x);

log('= = = =  the call stack is empty  = = = =');

import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// fill in the blanks

let x = '';

x += _;

setTimeout(() => {
  x += _;
  log('cb 1:', x);
}, 100);

x += _;

setTimeout(() => {
  x += _;
  log('cb 2:', x);
}, 300);

setTimeout(() => {
  const test = x === 'javascript';
  log('cb 3:', test);
  console.assert(test, 'x should be "javascript"');
}, 500);

setTimeout(() => {
  x += _;
  log('cb 4:', x);
}, 200);

x += _;

log(x);

log('= = = =  the call stack is empty  = = = =');

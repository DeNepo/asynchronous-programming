import { labeledLogger } from '/browser/lib/labeled-logger.js';

const log = labeledLogger();

// fill in the blanks

let x = '';

x += 'j';

setTimeout(() => {
  x += 'sc';
  log('cb 1:', x);
}, 100);

x += 'a';

setTimeout(() => {
  x += 'pt';
  log('cb 2:', x);
}, 300);

setTimeout(() => {
  const test = x === 'javascript';
  log('cb 3:', test);
  console.assert(test, 'x should be "javascript"');
}, 500);

setTimeout(() => {
  x += 'ri';
  log('cb 4:', x);
}, 200);

x += 'va';

log(x);

log('= = = =  the call stack is empty  = = = =');

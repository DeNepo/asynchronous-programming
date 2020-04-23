import * as say from './greetings.js';

const test1 = 'Hello, robin!' === _('robin');
const test2 = 'Bye, robin!' === _('robin');

console.assert(test1, 'Test 1');
console.assert(test2, 'Test 2');

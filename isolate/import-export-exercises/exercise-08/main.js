import * as say from './greetings.js';


const test1 = 'Hello, robin!' === say.hi('robin');
const test2 = 'Bye, robin!' === say.bye('robin');

console.assert(test1, 'Test 1');
console.assert(test2, 'Test 2');

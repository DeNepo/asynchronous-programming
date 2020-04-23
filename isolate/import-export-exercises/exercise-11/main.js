import { User } from './user.js';

const userJohn = new User('John');
const test1 = userJohn instanceof User;
const test2 = userJohn.name === 'John';
console.assert(test1, 'is an instance of User');
console.assert(test2, '.name is "John"');

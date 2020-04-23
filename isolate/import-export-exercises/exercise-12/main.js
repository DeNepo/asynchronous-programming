import { logIn, logOut, User } from './auth/index.js'

const newUser = _;
const test1 = 'John is logged in.' === logIn(newUser);
const test2 = 'John is logged out.' === logOut(newUser);

console.assert(test1, 'Test 1');
console.assert(test2, 'Test 2');

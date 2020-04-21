import { logIn, logOut, User } from './auth/index.js'

const userJohn = new User('John');
logIn(userJohn);
logOut(userJohn);

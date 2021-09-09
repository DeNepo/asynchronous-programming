import { truthiness } from './truthiness.js';

truthiness(1)
  .then(description => console.log(1, description))
  .catch(err => console.error(err));

truthiness(0)
  .then(description => console.log(0, description))
  .catch(err => console.error(err));

truthiness('')
  .then(description => console.log('', description))
  .catch(err => console.error(err));

truthiness('hello')
  .then(description => console.log('hello', description))
  .catch(err => console.error(err));

truthiness(null)
  .then(description => console.log(null, description))
  .catch(err => console.error(err));

console.log('= = = =  the call stack is empty  = = = =');

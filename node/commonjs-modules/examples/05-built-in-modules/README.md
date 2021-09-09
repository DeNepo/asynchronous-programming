# Built-In Modules

Built-in modules come pre-packaged with Node.js. You don't need to install or use any scripts before using them in your code.

Notice that you require built-in modules without giving a path in your `require('module-name')` statement.

Assert is the built-in module you will explore in these examples.

- [`assert` docs](https://nodejs.org/api/assert.html)

There are many more methods on `assert`, but these three are all you need for now:

1. `./ok.js` - checks if a value is truthy
2. `./strict-equal` - checks if two values are strictly equal (`===`)
3. `./deep-strict-equal` - checks if two data structures contain the same values
4. `./assert.js` - log the remaining keys on the assert object

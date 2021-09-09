# Command Line Arguments

A way to give your program some data to work with when the program starts up.

Consider a script that says "Hello HYF!"

A very simple way to write this script would be:

```js
console.log('Hello HYF!');
```

We'd run it like:

```bash
node ./index.js
```

And this will work! Every time you run this script, it will say hello to HYF.

But what if we want it to say hello to a specific person? What if we want it to say "Hello Evan!" or "Hello Lien!"? We could modify the script to do that:

```js
console.log('Hello Evan!');
```

or

```js
console.log('Hello Lien!');
```

But we don't want to modify the program every time we want it to say a specific name. What if we can tell the program what name to say, _when we run the program?_

We can, with _Command Line Arguments!_

Observe:

```js
const name = process.argv[2];

console.log(`Hello ${name}!`);
```

And we run it like:

```bash
node ./index.js "Evan"
```

The examples in this folder will teach you the hows and whys of reading command line arguments.

# CommonJS Modules

Node.js has a different system for using code from a different file, it's called [CommonJS](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules). Before ES6 `import`/`export` there was nothing built into JavaScript that allowed you to share code across files, so people made different conventions and tools for doing this. CommonJS was the most popular one:

- [require vs. import](https://www.youtube.com/watch?v=mK54Cn4ceac)
- [from IIFEs to CommonJS to ES6 Modules](https://www.youtube.com/watch?v=qJWALEoGge4)\

CommonJS modules are _not_ in strict mode by default, so you will need to `'use strict';` at the top of your files.

> PS. you _can_ use `import`/`export` in Node.js but it requires extra configuration is and not very common (yet)

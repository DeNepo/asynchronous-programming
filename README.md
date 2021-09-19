# Asynchronous Programming

> "Synchronous basically means that you can only execute one thing at a time. Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one."
>
> - [Mike](https://stackoverflow.com/a/33585047)

---

"The Internet", "The Web", "Web Apps". All of these terms describe something that is interconnected. If you zoom out a bit, the entire internet is basically billions of computers all sharing information and software! But so far your projects have been all alone on your computer :(

Everything you have learned so far happens on the _callstack_, everything on the callstack executes _synchronously_. Synchronous means that each line of code will finish executing before the next one starts. Think of infinite loops, your browser freezes because nothing else can happen while the loop is looping!

What makes web development so cool is the ... web. Being able to build applications that connect computers form across the internet. This also introduces some challenges, it can take some time for computers to talk to each other across the internet. You don't want your apps freezing while you wait to hear back from another computer.

Enter _asynchronous programming_: writing code that tells your browser to start one task and move on to a new task while you wait for the first to finish. This is possible because of the _Event Loop_.

## Contents

- [Learning Objectives](#learning-objectives)
- [Suggested Study](#suggested-study)
- Sundays & Projects
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
- [Class Recordings](#class-recordings)
- [Curriculum](https://home.hackyourfuture.be/curriculum) (external)
- [HYF Home](https://home.hackyourfuture.be/) (external)

## Getting Started

How to study the code in this repo.

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
   - `npm install -g study-lenses` (if you do not have it already)
   - `npm update -g study-lenses` (if you already have it installed)
2. Clone this repository:
   - `git clone git@github.com:HackYourFutureBelgium/asynchronous-programming.git` (SSH) (recommended)
   - `git clone https://github.com/HackYourFutureBelgium/asynchronous-programming.git` (HTTPS)
   - `gh repo clone HackYourFutureBelgium/asynchronous-programming` (GH CLI)
3. `cd` into the repository
   - `cd asynchronous-programming`
4. Run the `study` command from your CLI
   - `study`
5. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

### Running Tests

This repository has two test scripts:

- `npm run test:esm -- ./path/to/file.js`: used for testing ES Module files in the `/browser` directory
- `npm run test:cjs -- ./path/to/file.js`: used for testing CommonJS files in the `/node` directory

[TOP](#asynchronous-programming)

---

## Learning Objectives

- 🥚 You understand the JavaScript Event Loop, and can demonstrate this by using `setTimeout` and `setInterval` to schedule simple tasks.
- 🥚 You can explain why Asynchronous Programming is important for programs that have _blocking_ and _non-blocking_ tasks.
- 🥚 You can explain the basics of the Client/Server model and HTTP requests and can `fetch` data from RESTful APIs.
- 🥚 You can convert built-in Node modules from consuming callbacks being promises.
- 🐣 You can write and run JavaScript for Node.js or for the Browser. Both environments run JavaScript but they have some important differences!
  - **use cases**: You can explain some use cases that are unique to each runtime.
  - **built-in APIs**: You can list some of the key APIs available in each environment, and why they are not available in the other.
  - **module systems**: You can explain the difference between _CommonJS Modules_ in Node.js and _ES Modules_ in the Browser. You can write and use programs written with either system.
- 🐣 You can break down an asynchronous problem into smaller tasks and solve it using promises. This includes identify which tasks depend on each other and which are independent:
  - _dependent tasks_: The return value from one task is required to start the next task, these must be completed in a specific order - `.then`
  - _independent tasks_: These tasks do not use each other's return values, they can be completed at the same time - `Promise.all`
- 🐣 You can trace, refactor and write code that accesses the file system between these 3 different syntaxes:
  1. Callbacks
  2. Promises
  3. `async`/`await`
- 🐣 You can step through a Node.js command line application using the VSCode debugger.
- You can write small programs with a Data Access layer that asynchronously uses data stored in different locations:
  - 🐣 **Browser**: You can write a small web page that `fetch`es data from a RESTful API and renders it into the DOM.
  - 🐥 **Node**: You can write a small CLI program that reads user input from `process.argv` and reads/writes the file system.

[TOP](#asynchronous-programming)

---

## Suggested Study

References and Practice to help you master this module.

<details open>
<summary>expand/collapse</summary>

### in ths repo

- **`/browser`**
  - 🥚 **[`/the-event-loop`](./browser/the-event-loop)**: Learn what the JavaScript Event Loop is and how to visualize it. There are some tools that can help step through asynchronous code, but they will not work for all the code you write.
  - 🐣 **[`/isolate`](./browser/isolate)**: Explore different ways to write and use asynchronous code in JS from `setTimeout`/`setInterval`, to Promises to `async`/`await`
  - 🐣 **[`/promistaurant`](./browser/promistaurant)**: Practice solving asynchronous problems by working in a restaurant. You will need to figure out how you can complete people's orders when all the tasks take different amounts of time and may or may not depend on each other.
  - 🐣 **[`/api-calls`](./browser/api-calls)**: Learn how to fetch data from external APIs by modifying a template API Call function.
  - 🐣 **[`/fetch-and-render`](./browser/fetch-and-render)**: Practice fetching data from an API and rendering it asynchronously into a user interface.
- **`/node`**
  - 🥚 **[`/commonjs-modules`](./node/commonjs-modules)**: Node.js hasn't always used `import`/`export`, it used `require`/`module.exports`. Explore some examples to understand how this works.
  - 🥚 **[`/process-argv`](./node/process-argv)**: learn to use process.argv to get user input from the command line. you won't need this to write an API, but it's simple enough and helps to understand how command line tools work.
  - 🐣 **[`/file-system`](./node/file-system)**: practice using the `fs` module with callbacks, promises and `async`/`await`.

### The Event Loop

- [Coding Nomad](https://www.youtube.com/watch?v=5YcMKYTZZvk) - short clear example
- [Java Brains](https://www.youtube.com/watch?v=EI7sN1dDwcY) - restaurant analogy
- [Loupe](http://latentflip.com/loupe/) (+10)
- [In the Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0) (+10)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [flavicops](https://flaviocopes.com/javascript-event-loop/)
- [javascript.info/settimeout-setinterval](https://javascript.info/settimeout-setinterval)
- [https://javascript.info/event-loop](https://javascript.info/event-loop)
- [Use case for using setTimeout(0)](https://javascript.info/event-loop#use-case-3-doing-something-after-the-event)
- [Beau from FCC](https://www.youtube.com/watch?v=kOcFZV3c75I) (timeouts & intervals)

### Callbacks, Promises, Async

- References
  - [Coding Train](https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)
  - [Dev Ed](https://www.youtube.com/watch?v=_8gHHBlbziw)
  - [Traversy](https://www.youtube.com/watch?v=PoRJizFvM7s)
  - [javascript.info](https://javascript.info/async)
  - MDN: [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
  - HYF ... [AMS](https://github.com/HackYourFuture/JavaScript3/), [CPH](https://github.com/HackYourFuture-CPH/JavaScript/tree/master/javascript3)
  - [Async/Await - FunFunFunction](https://www.youtube.com/watch?v=568g8hxJJp4)
  - [`return await` (advanced)](https://stackoverflow.com/questions/38708550/difference-between-return-await-promise-and-return-promise)
- Practice
  - [learn-promises](https://github.com/oliverjam/learn-promises)
  - [promise-practice](https://github.com/oliverjam/promise-practice)
  - JS 30:
    - Whack-a-Mole
    - Slide in on Scroll
    - Countdown Timer
    - JS & CSS Clock
    - Webcam Fun

### APIs

- [What is JSON?](https://www.youtube.com/watch?v=JuFdz8f-cT4)
- APIs 101
  - [How do they work?](https://www.programmableweb.com/api-university/what-are-apis-and-how-do-they-work)
  - [Like a Restaurant](https://www.youtube.com/watch?v=s7wmiS2mSXY)
- **DevTools**, the Network Tab:
  - [chrome/ium](https://developers.google.com/web/tools/chrome-devtools/network/)
  - [firefox](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor)
- What is RESTful
  - JSON Placeholder:[live](https://jsonplaceholder.typicode.com/), [more docs](https://github.com/typicode/json-server)
  - [restfulapi.net](https://restfulapi.net/)
- [Coding Train](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
- [what is CORS?](https://www.codecademy.com/articles/what-is-cors)
- HTTP statuses
  - [In 60 Seconds](https://www.youtube.com/watch?v=GrNrcmD6HLA)
  - [httpstatuses.com](https://httpstatuses.com/)
  - [wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  - [http.cat](https://http.cat/)

### `fetch`

- References
  - [Javascript Promises and Fetch for beginners](https://www.youtube.com/watch?v=IHjzyhjKxtc)
  - [javascript.info/fetch](https://javascript.info/fetch)
  - [Traversy](https://www.youtube.com/watch?v=Oive66jrwBs)
  - [Coding Train](https://www.youtube.com/watch?v=tc8DU14qX6I)
  - [Fetch API Introduction](https://www.youtube.com/watch?v=PoRJizFvM7s)
  - [Learn Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)
  - [Async/Await Javascript and Promises - Fetch API vs Axios](https://www.youtube.com/watch?v=XCLtVQl1if0)
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Basic_concepts)
  - [this-to-fetch](https://github.com/hackyourfuturebelgium/this-to-fetch-example)
- Practice
  - [learn-fetch](https://github.com/oliverjam/learn-fetch)
  - [real-world-fetch](https://github.com/oliverjam/real-world-fetch)
  - [github-api-crash-course tutorial](https://www.youtube.com/watch?v=5QlE6o-iYcE). (hint: avoid pushing your GitHub auth token!)
  - [Fetching REST](https://github.com/HackYourFutureBelgium/fetching-rest)
  - JS 30: Type Ahead

### Debugging Node in VSCode

- [Getting started with Node.js debugging in VS Code](https://www.youtube.com/watch?v=2oFKNL7vYV8)
- [Burke Holland](https://www.youtube.com/watch?v=NW2HG9C_mZc)
- [VSCode Channel Intro](https://www.youtube.com/watch?v=2oFKNL7vYV8)
- [James Q Quick](https://www.youtube.com/watch?v=yFtU6_UaOtA)
- [CodeSpace, 2 Ways](https://www.youtube.com/watch?v=N8O-Yf3hc-A)

### Node.js

- **101**
  - [Mosh: Node.js in 1 hour](https://www.youtube.com/watch?v=uVwtVBpw7RQ&list=PLTjRvDozrdlydy3uUBWZlLUTNpJSGGCEm&index=1)
  - [Traversy: Node for Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)
  - [Traversy: Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
  - [NetNinja: Node Js Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
  - [`argsv`](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) - Use command line arguments in Node
- **Built-In Modules**
  - [The file system](https://vimeo.com/414475261) (first 20 minutes)
  - references
    - [assert](https://nodejs.org/api/assert.html) - Test values in Node.js
    - [fs](https://nodejs.org/api/fs.html) - Read & write form the file system
    - [path](https://nodejs.org/api/path.html) - Manipulate file paths
    - [util.promisify](https://nodejs.org/api/util.html#util_util_promisify_original) - Convert functions that take callbacks into Promises

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 1

The Event Loop!

<details>
<summary>expand/collapse</summary>

### Before Class

- [./browser/the-event-loop](./browser/the-event-loop)
  - watch a couple of the videos
  - step through the timeout examples in [jsv9000.app](https://www.jsv9000.app/)
- [./browser/isolate](./browser/isolate)
  - `labeled-logger`
  - `event-loop` examples

### During Class

#### Before Break

- _All Together_:
  - [The Event Loop](https://www.youtube.com/watch?v=EI7sN1dDwcY) - restaurant analogy
  - [./browser/the-event-loop](./browser/the-event-loop): timeouts examples
- _In Small Groups_:
  - [./browser/isolate](./browser/isolate): timeout exercises & sync vs. async

#### After break

- _In Small Groups_:
  - continue [./browser/isolate](./browser/isolate): timeout exercises & sync vs. async
- _All Together_:
  - recap & Q/A

### After Class

> independent study

No project this week! This week you should focus on studying:

- The Event Loop.
  - review the videos and visualizations in `/browser/the-event-loop`
  - continue with `/browser/isolate`, through promises if you have time
  - (_challenge_) Reverse-engineering [stopwatch.net](https://stopwatch.net/) with `setTimeout`, `setInterval`, `clearTimeout` and `clearInterval` is a good project if you're looking for one. (A single script.js file is ok, no need for full architecture)
- Node.js:
  1. [node/commonjs-modules](./node/commonjs-modules)
  2. [node/process-argv](./node/process-argv)
  3. [node/file-system](./node/file-system): 1. FS Sync, 2. FS Callbacks

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 2

<details>
<summary>expand/collapse</summary>

### Before Class

### During Class

#### Before Break

#### After Break

### After Class

- Promises
  - [./browser/promistaurant](./browser/promistaurant) will help you understand how to solve asynchronous problems by thinking about what tasks need to be done in a specific order and which tasks can be done at the same time.

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 3

<details>
<summary>expand/collapse</summary>

### Before Class

### During Class

### After Class

</details>
<br>

[TOP](#asynchronous-programming)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes. Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

---

### Class 7 & 8

> [Anthony](https://github.com/Toinne/), [Kevin](https://github.com/kevintss/)

1. week 1:
   - Part 1: [The Event Loop](https://vimeo.com/406780143)
   - Part 2: [Whack-a-Mole](https://vimeo.com/408313126)
2. week 2:
   - Part 1: [`fetch` & REST](https://vimeo.com/409437916)
   - Part 2: [Explore Users](https://vimeo.com/409459062)
3. week 3:
   - Part 1: [`import` and `export`](https://vimeo.com/412299042)
   - Part 2: [Explore Pokemon](https://vimeo.com/412616444)

---

### [class-9-10](https://github.com/hackyourfuturebelgium/class-9-10)

> [Bram](https://github.com/bramdevries), [Deni](https://github.com/denichodev)

1. week 1:
   - Part 1: [Isolate - The Event Loop](https://vimeo.com/459858141)
   - Part 2: [Integrate - Event Loop](https://vimeo.com/460082162)
   - Part 3: [Recap & Project Intro](https://vimeo.com/460082763)
1. week 2:
   - Part 1: [Isolate - Fetch & REST](https://vimeo.com/462531506)
   - Part 2: [Integrate - Fetch & REST](https://vimeo.com/462536889)
1. week 3:
   - Part 1: [Isolate - `async`/`await`](https://vimeo.com/465272582)
   - Part 2: [Integrate - `async`/`await`](https://vimeo.com/465276266)
   - Wednesday Review: [Deploying to Heroku](https://vimeo.com/466119979)

### [class-11-12](https://github.com/hackyourfuturebelgium/class-11-12)

> [Bram](https://github.com/bramdevries), [Thibault](https://github.com/ThibaultLesuisse)

1. week 1: Scheduling & The Event Loop. `setTimeout`, `setInterval`
   - [slides](./slides/week-1-bram.pdf)
   - [isolate](https://vimeo.com/507186101)
   - [integrate](https://vimeo.com/507186832)
   - [homework](https://vimeo.com/507187398)
   - [wednesday review](https://vimeo.com/508373774)
2. week 2: Promises & `fetch`
   - [slides](./slides/week-2-bram.pdf)
   - [isolate](https://vimeo.com/509470203), [exercises](https://vimeo.com/509470785)
   - [integrate](https://vimeo.com/509471044), [exercises](https://vimeo.com/509470529)
   - [homework](https://vimeo.com/509471326)
   - [Wednesday Review](https://vimeo.com/513441039)
3. week 3: `async`/`await` & `fetch`
   - [slides](./slides/week-3-bram.pdf)
   - [isolate](https://vimeo.com/512490603), [exercises](https://vimeo.com/512490977)
   - [integrate](https://vimeo.com/512491395), [exercises](https://vimeo.com/512491562)
   - [homework](https://vimeo.com/512491928)
   - [Wednesday Review](https://vimeo.com/513451907)

### [Class 13-14](https://github.com/hackyourfuturebelgium/class-13-14)

1. week 1 - by Yoshi and Joel:

- [Part 1](https://vimeo.com/579091811)
- [Part 2](https://vimeo.com/579095696)

1. week 2 - by Yoshi:

- [Part 1](https://vimeo.com/582102001)
- [Part 2](https://vimeo.com/582103554)
- [Part 3](https://vimeo.com/582104038)

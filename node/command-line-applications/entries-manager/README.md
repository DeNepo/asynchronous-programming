# Entries Manager CLI

A Node.js script that allows users to edit a _.json_ file containing a collection of key/value pairs.

This is an in-class project from the _web-apps_ module, check out [the module repo](https://github.com/hackyourfuturebelgium/web-apps/tree/master/isolate) for some practice problems before diving right in.

---

## Getting Started

1. Clone the repo
1. `cd` into the project

---

## Learning Objectives

- Using CLI arguments
- Writing to the file system
- Structuring and using CLI apps
- Reverse-engineering

---

## Running the Demo

This repo comes with a fully-functioning (but unreadable!) demo. Play with this demo for a while to make sure you understand how your `entries-manager-cli` should behave.

- `node demo.min.js` or `node demo.min.js -h`

---

## Complete the Exercise

Fill in the blanks!

---

## Challenges

All done? Copy your finished code into a new file so you don't loose your working code, and refactor the new file to:

- Read & write from a .json file with this schema:
  - ```
    [
      {key1: "value 1"},
      {key2: "value 2"},
      ...
    ]
    ```
  ```

  ```
- Read & write from a .txt file organized like this:
  - `"key 1":"value 1","key 2:"value 2",...`
- Make a better User Experience
  - Create a `package.json` file in this directory (`$ npm init`)
  - install [boxen](https://www.npmjs.com/package/boxen)
  - log boxes instead of just text!

# Week 2

## Asynchronous Programming

* [Prep Work](#prep-work)
* [Lesson Plan](#lesson-plan)
  * [Isolate](#isolate)
  * [Integrate](#integrate)
* [Assignments](#assignments)
  * [Exercises](#exercises)
  * [Project](#project)

---

## Prep Work

### JSON

* [What is it?](https://www.youtube.com/watch?v=JuFdz8f-cT4)

### APIs

* [How do they work?](https://www.programmableweb.com/api-university/what-are-apis-and-how-do-they-work)
* [Like a Restaurant](https://www.youtube.com/watch?v=s7wmiS2mSXY)


### RESTful

* [jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
* [restfulapi.net](https://restfulapi.net/)

### `fetch`

* [javascript.info/fetch](https://javascript.info/fetch)
* [Traversy](https://www.youtube.com/watch?v=Oive66jrwBs)
* [Coding Train](https://www.youtube.com/watch?v=tc8DU14qX6I)

---

## Lesson Plan

> [Lesson Plan Slides](https://hackyourfuture.be/asynchronous-programming/week-2)

`fetch`ing data from APIs

### Isolate

* `fetch`: [examples](../isolate/fetch-examples), [exercises](../isolate/fetch-exercises)

### Integrate

* [Explore Albums](../integrate/explore-albums)
* [Explore Posts](../integrate/explore-posts)
* [Explore Users](../integrate/explore-users-obfuscated) (obfuscated)
* [in-class project](https://github.com/hackyourfuturebelgium/explore-users) (starter repository)

---

## Assignments

> Before getting started on the homework, take a minute to set up your [Homework Issue](https://github.com/HackYourFutureBelgium/homework-submission#homework-issues) on this module's project board.

### Exercises

#### Isolating JavaScript

* [learn-fetch](https://github.com/oliverjam/learn-fetch) & [real-world-fetch](https://github.com/oliverjam/real-world-fetch)
    * These repository contain a very helpful README, starter code in `workshop.html` and a solution to study.
    * Your task is to write a _different_ solution with separated concerns that runs from _index.html_
    * Turn on github-pages so your coaches can review the live project

#### Integrating JavaScript

* Form a group of 2-3 and Complete 1 [JavaScript 30](https://github.com/hackyourfuturebelgium/javascript-30) group challenge, your choice!
  * Link to your team's main repository in your homework issue

#### Suggested Study

* [async/await](https://duckduckgo.com/?q=what+is+async+await+javascript&atb=v214-2__&iar=videos&iax=videos&ia=videos)

### Project: `restful-pjs`

> [Starter Code](https://github.com/HackYourFutureBelgium/homework-submission/#projects)

This week's project is to refactor your final code from Practical JavaScript to include ES6 `class`es, `fetch` and a RESTful backend to access your app's data.  This time, your app's data won't be hard-coded into your JavaScript source.  Your first fullstack project!

After forking [the starter repository](https://github.com/hackyourfuturebelgium/restful-pjs), you will have a fully-working backend.  You will need to write the frontend, and are free to organize your frontend code however you like as long as it:

* Is not in one file.  Please separate your concerns.
* Is all in the `/public` folder
* And builds from `/public/index.html`

Your finished repository must include:

* A `development-strategy.md` file to explain how you built the app in small pieces (this file doesn't need to match the tutorial!)
* One branch per step in your `development-strategy.md`
* Your code in `/public`, refactored from Practical JavaScript to include classes & fetch
* A project board & issues to track your progress through your development strategy
* A complete README

You will be assessed not on completion, but also on the quality of your code, the correctness of your branches, the organization of your code, and the completeness of your README.

A live demo isn't required for this project, but is a nice touch. Because this project has a backend it's not possible to deploy it with GitHub Pages.  The simplest option will be to [deploy it with Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true).

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>

# Example Projects

In this module you will be learning to organize your code into _objects_, grouping application data with the functions that act on it.  These projects will have many of the same pieces as last module's, but will not be organized the same way.

## Separating your Concerns

A working project is not enough! For projects in this module we will expect you to turn in code that is well organized & documented according to it's role.  Your projects should have these directories:

* `/app`: the main object for your project - this will have the _data_, _logic_ & _views_ for your project
* `/interactions`: the handlers & listeners, which call your object and interact with the DOM
* `style.css`: the CSS for your web page
* `index.html`: the initial DOM for your user interface, script tags & style tag
* `log.js`: the initial empty log for your project.
* `init.js`: a script to initialize the DOM & log
* `README.md`: describes what your project does & how to use it.
* `development-strategy.md`: a file containing a list of your user stories in order, describing what code you added for each step.

## Incremental Development

Developing your projects in this module will follow a similar pattern to last module:

### 0. Set-Up

Make sure all of the boilerplate you will need is in place

### 1. Data & Log

Create an object with initial data for your website, and create an empty log to record changes in state.

### 2. Initialize

Write the empty HTML & any DOM components necessary to render the initial data

### 3. User Stories

For each user story, try following these steps at first until you find a process that works for you:

1. __What can a user do on your web site?__ Write a user story to describe a user's interaction with your website
1. __What data is necessary for these user stories?__  Add new data fields to your object (if necessary)
1. __What must a user be able to do with this data?__ Write & test the logic to enable these interactions (as an object method).
1. __How does the UI display *state*?__ Write (or reuse) the DOM component methods needed to render changes in state
1. __How does the project enable *user interactions*__ Write listeners & handlers that allow users to interact with your object (use console.log instead of the DOM at first)


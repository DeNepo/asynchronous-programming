"use strict";

/* labeledLogger

  this is a function to (hopefully) help you understand the event loop and asynchronous programming in JS

  it provides this extra information:
    - label so you can tell which logger was called
    - the time you created the labeled logger
    - how many times you've called the logger
    - the time delay in millisenconds for each logs

*/

// create new loggers with different labels
const treeLabel = labeledLogger("tree");
const horseLabel = labeledLogger("horse");

// then use them just like console.log!
treeLabel("hello");
horseLabel("hello");

treeLabel("good bye");
horseLabel("good by");

// longer time delays
//  (more on this in the coming exercises)
const useTree = () => {
  treeLabel("at least 500 ms later");
};
setTimeout(useTree, 500);

const useHorse = () => {
  horseLabel("at least 2000 ms later");
};
setTimeout(useHorse, 2000);

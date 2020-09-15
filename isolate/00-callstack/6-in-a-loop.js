'use strict';

// why not use them in a loop?

const inALoop = (iterations, callback) => {
  for (let i = 0; i < iterations; i++) {
    callback(i);
  }
};


const logValue = (value) => {
  console.trace(value);
};
inALoop(4, logValue);


const bottlesOfMilk = (number) => {
  console.trace(`${number} bottles of milk`);
};
inALoop(5, bottlesOfMilk);


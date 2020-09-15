'use strict';

const freeOrNot = (parameter) => {
  const localVariable = "declared in function";
  freeVariable; // not declared locally or passed as a parameter
}

const freeVariable = 'declared in parent scope';
freeOrNot("parameter value");

/*
Free Variables

  "Free variables are simply the variables
    that are neither locally declared
    nor passed as parameter."
    --> Denys Séguret: https://stackoverflow.com/questions/12934929/what-are-free-variables

This may sound like an abstract, mathy definition.
But really it's not so bad.
You can identify free variables just by reading the source code,
without even running it!
*/

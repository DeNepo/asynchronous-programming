'use strict';

const closeIt = (x, y) => {
  return (x) => {
    return x + y;
  }
}

const closure_4_5 = closeIt(4, 5);

const result1 = closure_4_5(200);
console.assert(result1 === _, "result 1");

const result2 = closure_4_5(-3);
console.assert(result2 === _, "result 2");


const closure_false_true = closeIt(false, true);

const result3 = closure_false_true(200);
console.assert(result3 === _, "result 3");

const result4 = closure_false_true(-3);
console.assert(result4 === _, "result 4");


const result5 = closure_4_5(1);
console.assert(result5 === _, "result 5");

const result6 = closure_4_5(_) + closure_false_true(_);
console.assert(result6 === 6, "result 6");

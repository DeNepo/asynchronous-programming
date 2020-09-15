'use strict';

const closeIt = (parentParam) => {
  return (ownParam) => {
    return ownParam + parentParam;
  }
}

const closure1 = closeIt(3);
const closure2 = closeIt("3");

const result1 = closure1(8);
const result2 = closure2(8);
console.assert(result1 === _, "result 1")
console.assert(result2 === _, "result 2")

const result3 = closure1(true);
const result4 = closure2(true);
console.assert(result3 === _, "result 3")
console.assert(result4 === _, "result 4")

const result5 = closure1(_);
const result6 = closure2(_);
console.assert(result5 === result6, "results 5 & 6");

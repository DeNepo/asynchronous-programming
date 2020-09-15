'use strict';

const closeIt = (paramParent) => {
  const localParent = "b";
  return (paramOwn) => {
    const localOwn = "d";
    return paramParent + localParent + paramOwn + localOwn;
  }
}

const closure1 = closeIt("a");

const result1 = closure1("c");
console.assert(result1 === _, "result 1");

const result2 = closure1("x");
console.assert(result2 === _, "result 2");


const closure2 = closeIt("iii");

const result3 = closure2("2");
console.assert(result3 === _, "result 3");

const result4 = closure2("--");
console.assert(result4 === _, "result 4");


const result5 = closure1(8);
console.assert(result5 === _, "result 5");

const result6 = closure2(_)
console.assert(result6 === "iiib d", "result 6");

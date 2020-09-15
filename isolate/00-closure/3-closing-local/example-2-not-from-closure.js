'use strict';

const freeOrNot = (parameter) => {
  var localVariable = "declared in function";
  valueFromGlobalScope = "global side-effect";
}

let valueFromGlobalScope = "declared in global scope";
freeOrNot("first call");

valueFromGlobalScope = "reassigned in global scope";
freeOrNot("second call");

'use strict';

const closeIt = (parentParam) => {
  const parentLocal = "parent frame : " + parentParam;
  return (ownParam) => {
    const ownLocal = "own frame : " + ownParam;
    return { parentParam, parentLocal, ownParam, ownLocal };
  }
}
const closure1 = closeIt("a");
const result1 = closure1("b");

const closure2 = closeIt("c");
const result2 = closure2("d");

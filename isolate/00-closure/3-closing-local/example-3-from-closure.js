'use strict';

const closeIt = (parentParam) => {
  let parentLocal = "declared in parent frame : " + parentParam;
  return (ownParam) => {
    const ownLocal = "declared in body : " + ownParam[ownParam.length - 1];
    parentParam += parentParam + ownParam;
    parentLocal += ownParam + parentParam;
  }
}

const closure1 = closeIt("1");
closure1("first call to closure1");

const closure2 = closeIt("2");
closure2("first call to closure2");
closure2("second call to closure2");

closure1("second call to closure1");

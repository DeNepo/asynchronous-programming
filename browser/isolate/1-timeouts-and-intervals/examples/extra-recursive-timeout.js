import { labeledLogger } from "/browser/lib/labeled-logger.js";

const log = labeledLogger();

// you can make a timeout work like an interval with a recursive callback


 // about a recursive callback (recursion means writing a function that calls itself)

 log(' this is about  a recursive callback')
 log('you will the the timeout  work like an interval after the function theDogWalking')

function theDogWalking (){
  console.log('the dog is walking')
 
  dogWalked();
  layDog()
  dogStillWalking()
}

let dogWalked =  () => {
  console.log('the dog has been walked ')
}

let dogStillWalking = () => {
  console.log('the dog is still walking')
}

let layDog = () =>{
  console.log('the is a lay the dog have not  been stop walk')
}

theDogWalking();



const delay = 0; // 500
const totalSteps = 20;

const callback = (currentStep) => {
  log("step ", currentStep);
  if (currentStep === 0) {
    // base case
    clearTimeout(timeoutId);
  } else {
    // recursive case
    const nextStep = currentStep - 1;
    timeoutId = setTimeout(callback, delay, nextStep);
  }
};
let timeoutId = setTimeout(callback, delay, totalSteps);
log("scheduled timeout", timeoutId);

log("= = = =  the call stack is empty  = = = =");




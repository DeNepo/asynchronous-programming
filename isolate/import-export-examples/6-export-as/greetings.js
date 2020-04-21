const sayHi = (user) => {
  console.log(`Hello, ${user}!`);
};

const sayBye = (user) => {
  console.log(`Bye, ${user}!`);
};

export { sayHi as hi, sayBye as bye };

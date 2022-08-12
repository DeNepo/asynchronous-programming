import { bases, sizes } from './ingredients.js';

export const STATUSES = {
  NEW: 'NEW',
  VEGGIES_ADDED: 'VEGGIES ADDED',
  TOPPING_SELECTED: 'TOPPING SELECTED',
  SAUCE_ADDED: 'SAUCE ADDED',
  DONE: 'DONE',
  BAGGED: 'BAGGED',
};

const getRandomInRange = (min, max) => Math.random() * (max - min) + min;

let portionCtr = 1;
export const preparePortion = (size, base) => {
  return new Promise((resolve, reject) => {
    if (![sizes.small, sizes.medium, sizes.large].includes(size)) {
      reject('Invalid size!');
    }
    if (
      ![bases.fineNoodles, bases.riceNoodles, bases.whiteRice].includes(base)
    ) {
      reject('Invalid base!');
    }
    const ctr = portionCtr++;
    console.log(
      `Started preparing base for meal ${ctr} (${base}, ${size.name.toLowerCase()})`,
    );
    setTimeout(() => {
      console.log(
        `Finished preparing base for meal ${ctr} §${base}, ${size.name.toLowerCase()})`,
      );
      resolve({
        nr: ctr,
        base: base,
        size: size,
        extras: [],
        sauce: undefined,
        topping: undefined,
        status: STATUSES.NEW,
      });
    }, getRandomInRange(200, 1000));
  });
};

export const addVegetables = (meal) => {
  return new Promise((resolve, reject) => {
    if (meal.status !== STATUSES.NEW) {
      reject(
        'Can only add the vegetable base to a freshly made base without other ingredients added!',
      );
    }
    console.log(`Started adding vegetables to meal #${meal.nr}`);
    setTimeout(() => {
      console.log(`Finished adding vegetables to meal #${meal.nr}`);
      meal.status = STATUSES.VEGGIES_ADDED;
      resolve(meal);
    }, getRandomInRange(5, 1000));
  });
};

export const addTopping = (meal, topping) => {
  return new Promise((resolve, reject) => {
    if (meal.status !== STATUSES.VEGGIES_ADDED) {
      reject('The topping has to be added directly after the veggies!');
    }
    console.log(`Adding topping ${topping.name} to meal #${meal.nr}`);
    setTimeout(() => {
      meal.status = STATUSES.TOPPING_SELECTED;
      meal.topping = topping;
      console.log(`Topping ${topping.name} added to meal #${meal.nr}`);
      resolve(meal);
    }, getRandomInRange(topping.minDuration, topping.maxDuration));
  });
};

export const addSauce = (meal, sauce) => {
  return new Promise((resolve, reject) => {
    if (meal.status !== STATUSES.TOPPING_SELECTED) {
      reject(
        'The sauce has to be added directly after the topping was selected!',
      );
    }
    console.log(`Adding ${sauce} sauce to meal ${meal.nr}`);
    setTimeout(() => {
      console.log(`Finished adding ${sauce} sauce to meal #${meal.nr}`);
      meal.sauce = sauce;
      meal.status = STATUSES.SAUCE_ADDED;
      resolve(meal);
    }, getRandomInRange(5, 1000));
  });
};

export const prepareExtra = (extra) => {
  return new Promise((resolve, reject) => {
    console.log(`Started preparing extra ${extra.name}`);
    setTimeout(() => {
      console.log(`Finished preparing extra ${extra.name}`);
      resolve({ isPreparedExtra: true, preparedContent: extra });
    }, getRandomInRange(extra.minDuration, extra.maxDuration));
  });
};

export const addPreparedExtras = (meal, preparedExtras) => {
  return new Promise((resolve, reject) => {
    if (meal.status !== STATUSES.SAUCE_ADDED) {
      reject(`Extra's have to be added on top of the sauce!`);
    }
    console.log(`Adding prepared extras to meal #${meal.nr}`);
    setTimeout(() => {
      preparedExtras.forEach((ex) => meal.extras.push(ex.preparedContent));
      console.log(`Finished adding prepared extras to meal #${meal.nr}`);
      meal.status = STATUSES.DONE;
      resolve(meal);
    }, getRandomInRange(20, 100));
  });
};

export const bag = (meal) => {
  return new Promise((resolve, reject) => {
    if (
      !(meal.status === STATUSES.SAUCE_ADDED || meal.status === STATUSES.DONE)
    ) {
      reject(`The meal isn't ready yet to be bagged!`);
    }
    console.log(`Bagging meal #${meal.nr}`);
    setTimeout(() => {
      const price =
        meal.size.price + meal.topping.price + meal.extras.length * 0.7;
      console.log(`Finished bagging meal #${meal.nr} for a total of ${price}€`);
      meal.status = STATUSES.BAGGED;
      resolve(meal);
    }, getRandomInRange(20, 100));
  });
};

export const prettyPrintMeal = (meal) => {
  console.log('\n=======================================================');
  console.log(
    `------------------------Meal #${meal.nr}------------------------`,
  );
  console.log(`Base:    ${meal.base}`);
  console.log(`size:    ${meal.size.name.toLowerCase()}`);
  console.log(`Topping: ${meal.topping.name}`);
  console.log(`Sauce:   ${meal.sauce}`);
  if (meal.extras.length > 0) {
    console.log('-------------------------------------------------------');
    console.log("Extra's:   ");
    meal.extras.forEach((x) => console.log(`    ${x.name}`));
    console.log('-------------------------------------------------------');
  }
  console.log('=======================================================\n');
};

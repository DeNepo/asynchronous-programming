import {
  bases,
  extras,
  sauces,
  sizes,
  toppings,
} from '../kitchen/ingredients.js';
import {
  addPreparedExtras,
  addSauce,
  addTopping,
  addVegetables,
  bag,
  prepareExtra,
  preparePortion,
  prettyPrintMeal,
  STATUSES,
} from '../kitchen/steps.js';

/**
 * Harry and Ingrid come to the restaurant to eat together
 *
 *  Ingrid wants to eat:
 *  A large portion of fine noodles with shellfish and sweet chilli sauce with extra pineapple and mushrooms
 *
 *  Harry wants the following order:
 *  A medium white rice with beef and sweet chilli sauce with extra egg and onion
 *
 *  Complete the following code so that the test passes
 */

const preparedExtras = Promise.all(
  [extras.egg, extras.onion, extras.pineapple, extras.mushrooms].map((e) =>
    prepareExtra(e),
  ),
);

const harryPrep = preparePortion(sizes.medium, bases.whiteRice)
  .then((meal) => addVegetables(meal))
  .then((meal) => addTopping(meal, toppings.beef))
  .then((meal) => addSauce(meal, sauces.sweetChilli));

const ingridPrep = preparePortion(sizes.large, bases.fineNoodles)
  .then((meal) => addVegetables(meal))
  .then((meal) => addTopping(meal, toppings.shellfish))
  .then((meal) => addSauce(meal, sauces.sweetChilli));

const theOrder = Promise.all([harryPrep, ingridPrep, preparedExtras])
  .then(([hMeal, iMeal, [egg, onion, pineapple, mushrooms]]) =>
    Promise.all([
      addPreparedExtras(hMeal, [egg, onion]),
      addPreparedExtras(iMeal, [pineapple, mushrooms]),
    ]),
  )
  .then(([hMeal, iMeal]) => Promise.all([bag(hMeal), bag(iMeal)]));

theOrder
  .then(([harrysMeal, ingridsMeal]) => {
    prettyPrintMeal(ingridsMeal);

    describe("Ingrid's meal", () => {
      it('should be bagged', () => {
        expect(ingridsMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: large', () => {
        expect(ingridsMeal.size).toEqual(sizes.large);
      });
      it('should have base: fine noodles', () => {
        expect(ingridsMeal.base).toEqual(bases.fineNoodles);
      });
      it('should have sauce: sweet chili', () => {
        expect(ingridsMeal.sauce).toEqual(sauces.sweetChilli);
      });
      it('should have topping: shell fish', () => {
        expect(ingridsMeal.topping).toEqual(toppings.shellfish);
      });
      describe('the meal should have 2 extras', () => {
        it('containing 2 items', () => {
          expect(ingridsMeal.extras.length).toEqual(2);
        });
        it('includes: spring onion', () => {
          expect(ingridsMeal.extras.includes(extras.pineapple)).toEqual(true);
        });
        it('includes: broccoli', () => {
          expect(ingridsMeal.extras.includes(extras.mushrooms)).toEqual(true);
        });
      });
    });

    prettyPrintMeal(harrysMeal);

    describe("Harry's meal", () => {
      it('should be bagged', () => {
        expect(harrysMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: medium', () => {
        expect(harrysMeal.size).toEqual(sizes.medium);
      });
      it('should have base: white rice', () => {
        expect(harrysMeal.base).toEqual(bases.whiteRice);
      });
      it('should have sauce: sweet chili', () => {
        expect(harrysMeal.sauce).toEqual(sauces.sweetChilli);
      });
      it('should have topping: beef', () => {
        expect(harrysMeal.topping).toEqual(toppings.beef);
      });
      describe('the meal should have 2 extras', () => {
        it('containing 2 items', () => {
          expect(harrysMeal.extras.length).toEqual(2);
        });
        it('includes: spring onion', () => {
          expect(harrysMeal.extras.includes(extras.egg)).toEqual(true);
        });
        it('includes: broccoli', () => {
          expect(harrysMeal.extras.includes(extras.onion)).toEqual(true);
        });
      });
    });
  })
  .catch((err) => console.error(err));

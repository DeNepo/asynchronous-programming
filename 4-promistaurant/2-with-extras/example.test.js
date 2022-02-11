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
 * Eric wants to order the following meal:
 *
 *  A medium white rice with beef and sweet chilli sauce with extra egg and onion
 *
 *  Complete the following code so that the test passes
 */

const preparedExtras = Promise.all(
  [extras.egg, extras.onion].map((e) => prepareExtra(e)),
);

const mealWithoutExtras = preparePortion(sizes.medium, bases.whiteRice)
  .then((meal) => addVegetables(meal))
  .then((meal) => addTopping(meal, toppings.beef))
  .then((meal) => addSauce(meal, sauces.sweetChilli));

const ericsOrder = Promise.all([preparedExtras, mealWithoutExtras])
  .then(([thePreparedExtras, meal]) =>
    addPreparedExtras(meal, thePreparedExtras),
  )
  .then((meal) => bag(meal));

ericsOrder
  .then((theMeal) => {
    prettyPrintMeal(theMeal);

    describe("Eric's meal", () => {
      it('should be bagged', () => {
        expect(theMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: medium', () => {
        expect(theMeal.size).toEqual(sizes.medium);
      });
      it('should have base: white rice', () => {
        expect(theMeal.base).toEqual(bases.whiteRice);
      });
      it('should have sauce: sweet chili', () => {
        expect(theMeal.sauce).toEqual(sauces.sweetChilli);
      });
      it('should have topping: beef', () => {
        expect(theMeal.topping).toEqual(toppings.beef);
      });
      describe('the meal should have 2 extras', () => {
        it('containing 2 items', () => {
          expect(theMeal.extras.length).toEqual(2);
        });
        it('includes: egg', () => {
          expect(theMeal.extras.includes(extras.egg)).toEqual(true);
        });
        it('includes: onion', () => {
          expect(theMeal.extras.includes(extras.onion)).toEqual(true);
        });
      });
    });
  })
  .catch((err) => console.error(err));

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
 *  Geralt wants to order the following meal:
 *
 *  A small vegetarian portion of rice noodles with satay sauce with extra spring onion, broccoli and roasted peanuts
 *
 *  Complete the following code so that the test passes
 */

const preparedExtras = _;

const mealWithoutExtras = _;

const geraltsMeal = _;

geraltsMeal
  .then((theMeal) => {
    prettyPrintMeal(theMeal);

    describe("Geralt's meal", () => {
      it('should be bagged', () => {
        expect(theMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: small', () => {
        expect(theMeal.size).toEqual(sizes.small);
      });
      it('should have base: fine noodles', () => {
        expect(theMeal.base).toEqual(bases.fineNoodles);
      });
      it('should have sauce: satay', () => {
        expect(theMeal.sauce).toEqual(sauces.satay);
      });
      it('should have topping: vegetarian', () => {
        expect(theMeal.topping).toEqual(toppings.vegetarian);
      });
      describe('the meal should have 3 extras', () => {
        it('containing 3 items', () => {
          expect(theMeal.extras.length).toEqual(3);
        });
        it('includes: spring onion', () => {
          expect(theMeal.extras.includes(extras.springOnion)).toEqual(true);
        });
        it('includes: broccoli', () => {
          expect(theMeal.extras.includes(extras.broccoli)).toEqual(true);
        });
        it('includes: roasted peanuts', () => {
          expect(theMeal.extras.includes(extras.roastedPeanuts)).toEqual(true);
        });
      });
    });
  })
  .catch((err) => console.error(err));

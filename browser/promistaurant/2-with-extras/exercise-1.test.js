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
 *  Fien wants to order the following meal:
 *
 *  A large portion of fine noodles with shellfish and sweet chilli sauce with extra pineapple and mushrooms
 *
 *  Complete the following code so that the test passes
 */

const preparedExtras = _;

const mealWithoutExtras = _;

const fiensOrder = _;

fiensOrder
  .then((theMeal) => {
    prettyPrintMeal(theMeal);

    describe("Fien's meal", () => {
      it('should be bagged', () => {
        expect(theMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: large', () => {
        expect(theMeal.size).toEqual(sizes.large);
      });
      it('should have base: fine noodles', () => {
        expect(theMeal.base).toEqual(bases.fineNoodles);
      });
      it('should have sauce: sweet chili', () => {
        expect(theMeal.sauce).toEqual(sauces.sweetChilli);
      });
      it('should have topping: shell fish', () => {
        expect(theMeal.topping).toEqual(toppings.shellfish);
      });
      describe('the meal should have 2 extras', () => {
        it('containing 2 items', () => {
          expect(theMeal.extras.length).toEqual(2);
        });
        it('includes: pineapple', () => {
          expect(theMeal.extras.includes(extras.pineapple)).toEqual(true);
        });
        it('includes: mushrooms', () => {
          expect(theMeal.extras.includes(extras.mushrooms)).toEqual(true);
        });
      });
    });
  })
  .catch((err) => console.error(err));

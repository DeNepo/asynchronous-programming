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
 * Caroline wants to order the following meal:
 *
 *  A small portion of fine noodles with tofu and curry sauce with no extra's
 *
 *  Complete the following code so that the test passes
 */

const carolinesOrder = _;

carolinesOrder
  .then((theMeal) => {
    prettyPrintMeal(theMeal);

    describe("Caroline's meal", () => {
      it('should be bagged', () => {
        expect(theMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: small', () => {
        expect(theMeal.size).toEqual(sizes.small);
      });
      it('should have base: fine noodles', () => {
        expect(theMeal.base).toEqual(bases.fineNoodles);
      });
      it('should have sauce: curry', () => {
        expect(theMeal.sauce).toEqual(sauces.curry);
      });
      it('should have topping: tofu', () => {
        expect(theMeal.topping).toEqual(toppings.tofu);
      });
      describe('the meal should have no extras', () => {
        it('containing 0 items', () => {
          expect(theMeal.extras.length).toEqual(0);
        });
      });
    });
  })
  .catch((err) => console.error(err));

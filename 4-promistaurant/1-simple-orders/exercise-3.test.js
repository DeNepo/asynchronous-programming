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
 * Daisy wants to order the following meal:
 *
 *  A large portion of fine noodles with shrimps and sweet sour sauce with no extra's
 *
 *  Complete the following code so that the test passes
 */

const daisysOrder = _;

daisysOrder
  .then((theMeal) => {
    prettyPrintMeal(theMeal);

    describe("Daisy's meal", () => {
      it('should be bagged', () => {
        expect(theMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: large', () => {
        expect(theMeal.size).toEqual(sizes.large);
      });
      it('should have base: fine noodles', () => {
        expect(theMeal.base).toEqual(bases.fineNoodles);
      });
      it('should have sauce: sweet and sour', () => {
        expect(theMeal.sauce).toEqual(sauces.sweetSour);
      });
      it('should have topping: shrimps', () => {
        expect(theMeal.topping).toEqual(toppings.shrimps);
      });
      describe('the meal should have no extras', () => {
        it('containing 0 items', () => {
          expect(theMeal.extras.length).toEqual(0);
        });
      });
    });
  })
  .catch((err) => console.error(err));

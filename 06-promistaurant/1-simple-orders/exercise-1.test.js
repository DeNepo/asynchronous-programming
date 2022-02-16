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
 * Bob wants to order the following meal:
 *
 *  A large portion of rice noodles with chicken and teriyaki sauce with no extra's
 *
 *  Complete the following code so that the test passes
 */

const bobsOrder = _;

bobsOrder
  .then((theMeal) => {
    prettyPrintMeal(theMeal);

    describe("Bob's meal", () => {
      it('should be bagged', () => {
        expect(theMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: large', () => {
        expect(theMeal.size).toEqual(sizes.large);
      });
      it('should have base: rice noodles', () => {
        expect(theMeal.base).toEqual(bases.riceNoodles);
      });
      it('should have sauce: teriyaki', () => {
        expect(theMeal.sauce).toEqual(sauces.teriYaki);
      });
      it('should have topping: chicken', () => {
        expect(theMeal.topping).toEqual(toppings.chicken);
      });
      describe('the meal should have no extras', () => {
        it('containing 0 items', () => {
          expect(theMeal.extras.length).toEqual(0);
        });
      });
    });
  })
  .catch((err) => console.error(err));

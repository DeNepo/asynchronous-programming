import { bases, sauces, sizes, toppings } from '../kitchen/ingredients.js';
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
 * Alice wants to order the following meal:
 *
 *  A medium white rice with calamari and sweet chilli sauce with no extra's
 *
 *  Complete the following code so that the test passes
 */

const aliceMeal = preparePortion(sizes.medium, bases.whiteRice)
  .then((meal) => addVegetables(meal))
  .then((meal) => addTopping(meal, toppings.calamari))
  .then((meal) => addSauce(meal, sauces.sweetChilli))
  .then((meal) => bag(meal));

aliceMeal
  .then((theMeal) => {
    prettyPrintMeal(theMeal);

    describe('alice should get the meal she ordered', () => {
      it('should have white rice', () => {
        expect(theMeal.base).toEqual(bases.whiteRice);
      });
      it('should be bagged', () => {
        expect(theMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be medium', () => {
        expect(theMeal.size).toEqual(sizes.medium);
      });
      it('should have sweet chili sauce', () => {
        expect(theMeal.base).toEqual(bases.whiteRice);
      });
      it('should have calamari as a topping', () => {
        expect(theMeal.topping).toEqual(toppings.calamari);
      });
      describe('the meal should have no extras', () => {
        it('containing 0 items', () => {
          expect(theMeal.extras.length).toEqual(0);
        });
      });
    });
  })
  .catch((err) => console.error(err));

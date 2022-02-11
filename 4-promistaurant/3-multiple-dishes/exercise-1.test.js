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
 * Joel and Kyle come to the restaurant to eat together
 *
 *  Joel wants the following order:
 *  A small portion of rice noodles with chicken and YouWok sauce with extra egg, red peppers and onion
 *
 *  Kyle wants to eat:
 *  A medium portion of fine noodles with shrimps and soya sauce with extra pineapple and bamboo shoots.
 *
 *  Complete the following code so that the test passes
 */

const preparedExtras = _;

const JoelPrep = _;

const kylePrep = _;

const theOrder = _;

theOrder
  .then(([joelsMeal, kylesMeal]) => {
    prettyPrintMeal(joelsMeal);

    describe("Joel's meal", () => {
      it('should be bagged', () => {
        expect(joelsMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: small', () => {
        expect(joelsMeal.size).toEqual(sizes.small);
      });
      it('should have base: rice noodles', () => {
        expect(joelsMeal.base).toEqual(bases.riceNoodles);
      });
      it('should have sauce: YouWok', () => {
        expect(joelsMeal.sauce).toEqual(sauces.youWok);
      });
      it('should have topping: chicken', () => {
        expect(joelsMeal.topping).toEqual(toppings.chicken);
      });
      describe('the meal should have 3 extras', () => {
        it('containing 3 items', () => {
          expect(joelsMeal.extras.length).toEqual(3);
        });
        it('includes: egg', () => {
          expect(joelsMeal.extras.includes(extras.egg)).toEqual(true);
        });
        it('includes: onion', () => {
          expect(joelsMeal.extras.includes(extras.onion)).toEqual(true);
        });
        it('includes: red peppers', () => {
          expect(joelsMeal.extras.includes(extras.redPepper)).toEqual(true);
        });
      });
    });

    prettyPrintMeal(kylesMeal);

    describe("Kyle's meal", () => {
      it('should be bagged', () => {
        expect(kylesMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: medium', () => {
        expect(kylesMeal.size).toEqual(sizes.medium);
      });
      it('should have base: fine noodles', () => {
        expect(kylesMeal.base).toEqual(bases.fineNoodles);
      });
      it('should have sauce: soy sauce', () => {
        expect(kylesMeal.sauce).toEqual(sauces.soya);
      });
      it('should have topping: shrimps', () => {
        expect(kylesMeal.topping).toEqual(toppings.shrimps);
      });
      describe('the meal should have 2 extras', () => {
        it('containing 2 items', () => {
          expect(kylesMeal.extras.length).toEqual(2);
        });
        it('includes: bamboo shoots', () => {
          expect(kylesMeal.extras.includes(extras.bambooShoots)).toEqual(true);
        });
        it('includes: pineapple', () => {
          expect(kylesMeal.extras.includes(extras.pineapple)).toEqual(true);
        });
      });
    });
  })
  .catch((err) => console.error(err));

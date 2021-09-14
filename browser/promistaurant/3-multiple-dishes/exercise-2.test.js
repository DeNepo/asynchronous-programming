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
 * Linda, Monica, Nina and Olivia come to the restaurant to eat together
 *
 *  Linda wants the following order:
 *  A small portion of rice noodles with chicken and YouWok sauce with extra egg, red peppers and onion
 *
 *  Monica wants the following order:
 *  A medium portion of white rice with shrimps and soya sauce with extra pineapple.
 *
 *  Nina wants the following order:
 *  A large portion of rice noodles with calamari and sweet sour sauce without extras.
 *
 *  Olivia wants the following order:
 *  A large portion of rice noodles with calamari and thai sauce with extra egg, mushrooms, pineapple and broccoli.
 *
 *  Complete the following code so that the test passes
 */

_;

const theOrder = _;

theOrder
  .then(([lindasMeal, monicasMeal, ninasMeal, oliviasMeal]) => {
    prettyPrintMeal(lindasMeal);

    describe("Linda's meal", () => {
      it('should be bagged', () => {
        expect(lindasMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: small', () => {
        expect(lindasMeal.size).toEqual(sizes.small);
      });
      it('should have base: rice noodles', () => {
        expect(lindasMeal.base).toEqual(bases.riceNoodles);
      });
      it('should have sauce: YouWok', () => {
        expect(lindasMeal.sauce).toEqual(sauces.youWok);
      });
      it('should have topping: chicken', () => {
        expect(lindasMeal.topping).toEqual(toppings.chicken);
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

    prettyPrintMeal(monicasMeal);

    describe("Monica's meal", () => {
      it('should be bagged', () => {
        expect(monicasMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: medium', () => {
        expect(monicasMeal.size).toEqual(sizes.medium);
      });
      it('should have base: white rice', () => {
        expect(monicasMeal.base).toEqual(bases.whiteRice);
      });
      it('should have sauce: soya', () => {
        expect(monicasMeal.sauce).toEqual(sauces.soya);
      });
      it('should have topping: shrimps', () => {
        expect(monicasMeal.topping).toEqual(toppings.shrimps);
      });
      describe('the meal should have 1 extras', () => {
        it('containing 1 items', () => {
          expect(monicasMeal.extras.length).toEqual(1);
        });
        it('includes: pineapple', () => {
          expect(monicasMeal.extras.includes(extras.pineapple)).toEqual(true);
        });
      });
    });

    prettyPrintMeal(ninasMeal);

    describe("Nina's meal", () => {
      it('should be bagged', () => {
        expect(ninasMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: large', () => {
        expect(ninasMeal.size).toEqual(sizes.large);
      });
      it('should have base: rice noodles', () => {
        expect(ninasMeal.base).toEqual(bases.riceNoodles);
      });
      it('should have sauce: sweet sour', () => {
        expect(ninasMeal.sauce).toEqual(sauces.sweetSour);
      });
      it('should have topping: shrimps', () => {
        expect(ninasMeal.topping).toEqual(toppings.shrimps);
      });
      describe('the meal should have 0 extras', () => {
        it('containing 0 items', () => {
          expect(ninasMeal.extras.length).toEqual(0);
        });
      });
    });

    prettyPrintMeal(oliviasMeal);

    describe("Olivia's meal", () => {
      it('should be bagged', () => {
        expect(oliviasMeal.status).toEqual(STATUSES.BAGGED);
      });
      it('should be size: large', () => {
        expect(oliviasMeal.size).toEqual(sizes.large);
      });
      it('should have base: rice noodles', () => {
        expect(oliviasMeal.base).toEqual(bases.riceNoodles);
      });
      it('should have sauce: thai', () => {
        expect(oliviasMeal.sauce).toEqual(sauces.thai);
      });
      it('should have topping: calamari', () => {
        expect(oliviasMeal.topping).toEqual(toppings.calamari);
      });
      describe('the meal should have 4 extras', () => {
        it('containing 4 items', () => {
          expect(oliviasMeal.extras.length).toEqual(4);
        });
        it('includes: pineapple', () => {
          expect(oliviasMeal.extras.includes(extras.pineapple)).toEqual(true);
        });
        it('includes: mushrooms', () => {
          expect(oliviasMeal.extras.includes(extras.mushrooms)).toEqual(true);
        });
        it('includes: eggs', () => {
          expect(oliviasMeal.extras.includes(extras.eggs)).toEqual(true);
        });
        it('includes: broccoli', () => {
          expect(oliviasMeal.extras.includes(extras.broccoli)).toEqual(true);
        });
      });
    });
  })
  .catch((err) => console.error(err));

import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

/**
 *
 * @async
 */
const contactInfo = async () => {};

describe("contactInfo returns a specific user's contact info", () => {
  it("gets user 3's info", async () => {
    const actual = await contactInfo(3);
    expect(actual).toEqual([
      'Nathan@yesenia.net',
      '1-463-123-4447',
      'ramiro.info',
      '59590-4157',
    ]);
  });
  it("gets user 5's info", async () => {
    const actual = await contactInfo(5);
    expect(actual).toEqual([
      'Lucio_Hettinger@annie.ca',
      '(254)954-1289',
      'demarco.info',
      '33263',
    ]);
  });
  it("gets user 7's info", async () => {
    const actual = await contactInfo(7);
    expect(actual).toEqual([
      'Telly.Hoeger@billy.biz',
      '210.067.6132',
      'elvis.io',
      '58804-1099',
    ]);
  });
  it("gets user 9's info", async () => {
    const actual = await contactInfo(9);
    expect(actual).toEqual([
      'Chaim_McDermott@dana.io',
      '(775)976-6794 x41206',
      'conrad.com',
      '76495-3109',
    ]);
  });
});

log('= = = =  the call stack is empty  = = = =');

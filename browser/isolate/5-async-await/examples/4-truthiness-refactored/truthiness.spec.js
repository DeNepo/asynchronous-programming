import { truthiness } from './truthiness.js';

describe('truthiness says if a value is truthy or falsy', () => {
  describe('it describes falsy values as "falsey', () => {
    it('0 is "falsey"', async () => {
      const actual = await truthiness(0);
      expect(actual).toEqual('falsey');
    });
    it('"" is "falsey', async () => {
      const actual = await truthiness('');
      expect(actual).toEqual('falsey');
    });
    it('null is "falsey', async () => {
      const actual = await truthiness(null);
      expect(actual).toEqual('falsey');
    });
  });
  describe('it describes truthy values as "truey"', () => {
    it('1 is "truey"', async () => {
      const actual = await truthiness(1);
      expect(actual).toEqual('truey');
    });
    it('"hello" is "truey"', async () => {
      const actual = await truthiness('hello');
      expect(actual).toEqual('truey');
    });
    it('-1 is "truey"', async () => {
      const actual = await truthiness(-1);
      expect(actual).toEqual('truey');
    });
  });
});

import { describeValue } from './describe-value.js';

describe('describeValue says if a value is truthy or falsy', () => {
  describe('it describes falsy values as "falsey', () => {
    it('0 is "falsey"', () => {
      const actual = describeValue(0);
      expect(actual).toEqual('falsey');
    });
    it('"" is "falsey', () => {
      const actual = describeValue('');
      expect(actual).toEqual('falsey');
    });
    it('null is "falsey', () => {
      const actual = describeValue(null);
      expect(actual).toEqual('falsey');
    });
  });
  describe('it describes truthy values as "truey"', () => {
    it('1 is "truey', () => {
      const actual = describeValue(1);
      expect(actual).toEqual('truey');
    });
    it('"hello" is "truey', () => {
      const actual = describeValue('hello');
      expect(actual).toEqual('truey');
    });
    it('-1 is "truey', () => {
      const actual = describeValue(-1);
      expect(actual).toEqual('truey');
    });
  });
});

'use strict';

const repeater = require('./repeater');

describe('repeater joins an array of strings into a single formatted list', () => {
  it('returns an empty string for 0 repeats', () => {
    const expected = '';
    const actual = repeater('howdy', 0);
    expect(actual).toEqual(expected);
  });
  it('returns 4 newlines for an empty string repeated 5 times', () => {
    const expected = '\n\n\n\n';
    const actual = repeater('', 5);
    expect(actual).toEqual(expected);
  });
  it('repeats text once', () => {
    const expected = 'spelling bee';
    const actual = repeater('spelling bee', 1);
    expect(actual).toEqual(expected);
  });
  it('repeats text many times', () => {
    const expected = 'timly\ntimly\ntimly\ntimly\ntimly';
    const actual = repeater('timly', 5);
    expect(actual).toEqual(expected);
  });
  describe('repeater checks the type of its arguments', () => {
    it('throws an error if the first argument is not a string', () => {
      const shouldThrow = () => repeater(true, 0);
      const expected = new TypeError('text is not a string');
      expect(shouldThrow).toThrow(expected);
    });
    it('throws an error if the second argument is not a number', () => {
      const shouldThrow = () => repeater('a string!', true);
      const expected = new TypeError('repeats is not a number');
      expect(shouldThrow).toThrow(expected);
    });
    it('throws an error if the second argument is NaN', () => {
      const shouldThrow = () => repeater('a string!', NaN);
      const expected = new TypeError('repeats is NaN');
      expect(shouldThrow).toThrow(expected);
    });
  });
});

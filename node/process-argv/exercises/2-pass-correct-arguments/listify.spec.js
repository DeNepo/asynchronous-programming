'use strict';

const listify = require('./listify.js');

describe('listify joins an array of strings into a single formatted list', () => {
  it('returns an empty string for an empty array', () => {
    const expected = '';
    const actual = listify([]);
    expect(actual).toEqual(expected);
  });
  it('can create lists with one item', () => {
    const expected = '- toad';
    const actual = listify(['toad']);
    expect(actual).toEqual(expected);
  });
  it('can create lists with many items', () => {
    const expected = '- gorgeous\n- spiced\n- potato';
    const actual = listify(['gorgeous', 'spiced', 'potato']);
    expect(actual).toEqual(expected);
  });
  it('throws an error if the argument is not an array', () => {
    const shouldThrow = () => listify('not an array');
    const expected = new TypeError('arrOfStrings is not an array');
    expect(shouldThrow).toThrow(expected);
  });
  it('throws an error if the array contains non-strings', () => {
    const shouldThrow = () => listify(['', '', 1, '']);
    const expected = new TypeError('arrOfStrings is not an array of strings');
    expect(shouldThrow).toThrow(expected);
  });
});

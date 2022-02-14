import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

/**
 *
 */
const getIntros = async (ids = []) => {};

// --- --- tests --- ---

describe('getIntros: returns an array of user introductions', () => {
  it('gets intros for 6', async () => {
    const actual = await getIntros([6]);
    expect(actual).toEqual(['6: Hello, my name is Mrs. Dennis Schulist']);
  });
  it('gets intros for 8, 6, 4', async () => {
    const actual = await getIntros([8, 6, 4]);
    expect(actual).toEqual([
      '8: Hello, my name is Nicholas Runolfsdottir V',
      '6: Hello, my name is Mrs. Dennis Schulist',
      '4: Hello, my name is Patricia Lebsack',
    ]);
  });
  it('gets intros for 4, 7, 5, 6', async () => {
    const actual = await getIntros([4, 7, 5, 6]);
    expect(actual).toEqual([
      '4: Hello, my name is Patricia Lebsack',
      '7: Hello, my name is Kurtis Weissnat',
      '5: Hello, my name is Chelsey Dietrich',
      '6: Hello, my name is Mrs. Dennis Schulist',
    ]);
  });
  it('gets intros for no one', async () => {
    const actual = await getIntros([]);
    expect(actual).toEqual([]);
  });
});

console.log('= = = =  the call stack is empty  = = = =');

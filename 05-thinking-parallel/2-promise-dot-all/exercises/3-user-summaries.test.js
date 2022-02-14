import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

// --- declare function ---

/**
 *
 */
const createSummaries = async (ids = []) => {};

// --- --- tests --- ---

describe('createSummaries: returns an array of user summaries', () => {
  it('creates a summary for 6', async () => {
    const actual = await createSummaries([6]);
    expect(actual).toEqual([
      {
        name: 'Mrs. Dennis Schulist',
        city: 'South Christy',
        companyName: 'Considine-Lockman',
      },
    ]);
  });
  it('creates a summary for 5, 1, 10', async () => {
    const actual = await createSummaries([5, 1, 10]);
    expect(actual).toEqual([
      {
        name: 'Chelsey Dietrich',
        city: 'Roscoeview',
        companyName: 'Keebler LLC',
      },
      {
        name: 'Leanne Graham',
        city: 'Gwenborough',
        companyName: 'Romaguera-Crona',
      },
      {
        name: 'Clementina DuBuque',
        city: 'Lebsackbury',
        companyName: 'Hoeger LLC',
      },
    ]);
  });
  it('creates a summary for 7, 5', async () => {
    const actual = await createSummaries([7, 5]);
    expect(actual).toEqual([
      {
        name: 'Kurtis Weissnat',
        city: 'Howemouth',
        companyName: 'Johns Group',
      },
      {
        name: 'Chelsey Dietrich',
        city: 'Roscoeview',
        companyName: 'Keebler LLC',
      },
    ]);
  });
  it('creates a summary for no one', async () => {
    const actual = await createSummaries([]);
    expect(actual).toEqual([]);
  });
});

console.log('= = = =  the call stack is empty  = = = =');

import { searchResources } from './search-resources.js';

describe('searchResources: fetches all entries from a single type that match a search', () => {
  it('should fetch all comments matching "non\naut"', async () => {
    const actual = await searchResources('comments', 'non\naut');
    expect(actual).toEqual([
      {
        postId: 2,
        id: 10,
        name: 'eaque et deleniti atque tenetur ut quo ut',
        email: 'Carmen_Keeling@caroline.name',
        body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis',
      },
    ]);
  });
  it('should fetch all users matching ".net"', async () => {
    const actual = await searchResources('users', '.net');
    expect(actual).toEqual([
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653',
          },
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications',
        },
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
          street: 'Kattie Turnpike',
          suite: 'Suite 198',
          city: 'Lebsackbury',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232',
          },
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models',
        },
      },
    ]);
  });
  it('should fetch all posts matching "HYF"', async () => {
    const actual = await searchResources('posts', 'HYF');
    expect(actual).toEqual([]);
  });
});

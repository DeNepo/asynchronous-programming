import { userByUsername } from './user-by-username.js';

describe('userByUsername: fetches the user with a specific username', () => {
  describe('it returns the user object if the username exists', () => {
    it('there is a user named "Delphine"', async () => {
      const user = await userByUsername('Delphine');
      expect(user).toEqual({
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
          street: 'Dayna Park',
          suite: 'Suite 449',
          city: 'Bartholomebury',
          zipcode: '76495-3109',
          geo: {
            lat: '24.6463',
            lng: '-168.8889',
          },
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
          name: 'Yost and Sons',
          catchPhrase: 'Switchable contextually-based project',
          bs: 'aggregate real-time technologies',
        },
      });
    });
    it('there is a user named "Elwyn.Skiles"', async () => {
      const user = await userByUsername('Elwyn.Skiles');
      expect(user).toEqual({
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
          street: 'Rex Trail',
          suite: 'Suite 280',
          city: 'Howemouth',
          zipcode: '58804-1099',
          geo: {
            lat: '24.8918',
            lng: '21.8984',
          },
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
          name: 'Johns Group',
          catchPhrase: 'Configurable multimedia task-force',
          bs: 'generate enterprise e-tailers',
        },
      });
    });
  });
  describe('it returns null if the username does not exists', () => {
    it('there is no user named "Samir"', async () => {
      const user = await userByUsername('Samir');
      expect(user).toEqual(null);
    });
    it('there is no user named "Unmesh"', async () => {
      const user = await userByUsername('Unmesh');
      expect(user).toEqual(null);
    });
  });
});

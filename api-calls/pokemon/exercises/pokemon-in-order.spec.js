import { pokemonInOrder } from './pokemon-in-order.js';

describe('pokemonInOrder: returns a selected array of pokemon in order', () => {
  it('returns pokemon 11 -> 20', async () => {
    const actual = await pokemonInOrder(10, 10);
    expect(actual).toEqual([
      {
        name: 'metapod',
        url: 'https://pokeapi.co/api/v2/pokemon/11/',
      },
      {
        name: 'butterfree',
        url: 'https://pokeapi.co/api/v2/pokemon/12/',
      },
      {
        name: 'weedle',
        url: 'https://pokeapi.co/api/v2/pokemon/13/',
      },
      {
        name: 'kakuna',
        url: 'https://pokeapi.co/api/v2/pokemon/14/',
      },
      {
        name: 'beedrill',
        url: 'https://pokeapi.co/api/v2/pokemon/15/',
      },
      {
        name: 'pidgey',
        url: 'https://pokeapi.co/api/v2/pokemon/16/',
      },
      {
        name: 'pidgeotto',
        url: 'https://pokeapi.co/api/v2/pokemon/17/',
      },
      {
        name: 'pidgeot',
        url: 'https://pokeapi.co/api/v2/pokemon/18/',
      },
      {
        name: 'rattata',
        url: 'https://pokeapi.co/api/v2/pokemon/19/',
      },
      {
        name: 'raticate',
        url: 'https://pokeapi.co/api/v2/pokemon/20/',
      },
    ]);
  });
  it('returns pokemon #23', async () => {
    const actual = await pokemonInOrder(1, 22);
    expect(actual).toEqual([
      {
        name: 'ekans',
        url: 'https://pokeapi.co/api/v2/pokemon/23/',
      },
    ]);
  });
  it('returns the first 3 pokemon', async () => {
    const actual = await pokemonInOrder(3, 0);
    expect(actual).toEqual([
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
    ]);
  });
});

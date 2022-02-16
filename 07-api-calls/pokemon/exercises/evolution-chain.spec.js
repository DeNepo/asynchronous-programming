import { evolutionChain } from './evolution-chain.js';

describe('evolutionChain: returns a selected array of pokemon in order', () => {
  it('returns the pokemon in chain 4', async () => {
    const actual = await evolutionChain(4);
    expect(actual).toEqual([
      {
        name: 'caterpie',
        url: 'https://pokeapi.co/api/v2/pokemon-species/10/',
      },
      {
        name: 'metapod',
        url: 'https://pokeapi.co/api/v2/pokemon-species/11/',
      },
      {
        name: 'butterfree',
        url: 'https://pokeapi.co/api/v2/pokemon-species/12/',
      },
    ]);
  });
  it('returns the pokemon in chain 7', async () => {
    const actual = await evolutionChain(7);
    expect(actual).toEqual([
      {
        name: 'rattata',
        url: 'https://pokeapi.co/api/v2/pokemon-species/19/',
      },
      {
        name: 'raticate',
        url: 'https://pokeapi.co/api/v2/pokemon-species/20/',
      },
    ]);
  });
  it('returns the pokemon in chain 14', async () => {
    const actual = await evolutionChain(14);
    expect(actual).toEqual([
      {
        name: 'cleffa',
        url: 'https://pokeapi.co/api/v2/pokemon-species/173/',
      },
      {
        name: 'clefairy',
        url: 'https://pokeapi.co/api/v2/pokemon-species/35/',
      },
      {
        name: 'clefable',
        url: 'https://pokeapi.co/api/v2/pokemon-species/36/',
      },
    ]);
  });
  it('returns the pokemon in chain 15', async () => {
    const actual = await evolutionChain(15);
    expect(actual).toEqual([
      {
        name: 'vulpix',
        url: 'https://pokeapi.co/api/v2/pokemon-species/37/',
      },
      {
        name: 'ninetales',
        url: 'https://pokeapi.co/api/v2/pokemon-species/38/',
      },
    ]);
  });
});

import { pokemonWithAbility } from './pokemon-with-ability.js';

describe('pokemonWithAbility: returns an array of all Pokemon with a specific ability', () => {
  it('returns all pokemon who can "volt-absorb"', async () => {
    const actual = await pokemonWithAbility('volt-absorb');
    expect(actual).toEqual([
      {
        name: 'jolteon',
        url: 'https://pokeapi.co/api/v2/pokemon/135/',
      },
      {
        name: 'chinchou',
        url: 'https://pokeapi.co/api/v2/pokemon/170/',
      },
      {
        name: 'lanturn',
        url: 'https://pokeapi.co/api/v2/pokemon/171/',
      },
      {
        name: 'minun',
        url: 'https://pokeapi.co/api/v2/pokemon/312/',
      },
      {
        name: 'pachirisu',
        url: 'https://pokeapi.co/api/v2/pokemon/417/',
      },
      {
        name: 'zeraora',
        url: 'https://pokeapi.co/api/v2/pokemon/807/',
      },
      {
        name: 'dracozolt',
        url: 'https://pokeapi.co/api/v2/pokemon/880/',
      },
      {
        name: 'arctozolt',
        url: 'https://pokeapi.co/api/v2/pokemon/881/',
      },
      {
        name: 'thundurus-therian',
        url: 'https://pokeapi.co/api/v2/pokemon/10020/',
      },
    ]);
  });
  it('returns all pokemon who can "drizzle"', async () => {
    const actual = await pokemonWithAbility('drizzle');
    expect(actual).toEqual([
      {
        name: 'politoed',
        url: 'https://pokeapi.co/api/v2/pokemon/186/',
      },
      {
        name: 'pelipper',
        url: 'https://pokeapi.co/api/v2/pokemon/279/',
      },
      {
        name: 'kyogre',
        url: 'https://pokeapi.co/api/v2/pokemon/382/',
      },
    ]);
  });
  it('returns all pokemon who can "sand-stream"', async () => {
    const actual = await pokemonWithAbility('sand-stream');
    expect(actual).toEqual([
      {
        name: 'tyranitar',
        url: 'https://pokeapi.co/api/v2/pokemon/248/',
      },
      {
        name: 'hippopotas',
        url: 'https://pokeapi.co/api/v2/pokemon/449/',
      },
      {
        name: 'hippowdon',
        url: 'https://pokeapi.co/api/v2/pokemon/450/',
      },
      {
        name: 'gigalith',
        url: 'https://pokeapi.co/api/v2/pokemon/526/',
      },
      {
        name: 'tyranitar-mega',
        url: 'https://pokeapi.co/api/v2/pokemon/10049/',
      },
    ]);
  });
});

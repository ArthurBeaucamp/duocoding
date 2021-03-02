import { IExercice } from 'src/app/interfaces/exercice';

export const EXERCICES: IExercice[] = [
  {
    instruction: 'Find list type',
    code: 'const list: any = [1, 2, 3];',
    multiChoice: [
      { label: 'number', isGoodResponse: false },
      { label: 'string[]', isGoodResponse: false },
      { label: 'string', isGoodResponse: false },
      { label: 'number[]', isGoodResponse: true },
    ],
  },
  {
    instruction: 'Find pokemonSelected type',
    code: 'const pokemonSelected: any = "Squirtle";',
    multiChoice: [
      { label: 'number', isGoodResponse: false },
      { label: 'string[]', isGoodResponse: false },
      { label: 'string', isGoodResponse: true },
      { label: 'unknow', isGoodResponse: false },
    ],
  },
  {
    instruction: 'Find isConnected type',
    code: 'const isConnected: any = false;',
    multiChoice: [
      { label: 'boolean', isGoodResponse: true },
      { label: 'boolean[]', isGoodResponse: false },
      { label: 'false', isGoodResponse: false },
      { label: 'string', isGoodResponse: false },
    ],
  },
];

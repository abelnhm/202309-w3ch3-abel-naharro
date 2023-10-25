import { Pet } from '../models/pet';

export const getMockPets = (): Pet[] => [
  new Pet('Kira', 'Perro pekinés', 'David'),
  new Pet('Lola', 'Shiba inu', 'David'),
  new Pet('Leika', 'Perro común', 'David '),
  new Pet('Leo', 'Gato común europeo', 'Abel'),
  new Pet('Oli', 'Gato común europeo', 'Abel'),
];

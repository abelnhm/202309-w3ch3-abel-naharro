export type PetStructure = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};

export class Pet implements PetStructure {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
  constructor(name: string, breed: string, owner: string) {
    this.id = Math.trunc(Math.random() * 100).toString();
    this.name = name;
    this.breed = breed;
    this.isAdopted = false;
    this.owner = owner;
  }
}

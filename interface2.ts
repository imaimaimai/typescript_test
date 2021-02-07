namespace Interface2 {

interface IAnimal {
  id: string
  name?: string
  scientificName: string
}

class Dog implements IAnimal {

  id: string;
  name: string;
  scientificName: string
  length: number;
  weight: number;

  constructor( id: string,  name: string,  scientificName: string, length: number,  weight: number) {
    this.id= id;
    this.name = name;
    this.scientificName = scientificName;
    this.length = length;
    this.weight = weight;

  }

}

const dog = new Dog("1", "dog", "Doggy", 100,10);

console.log(dog.name)



}
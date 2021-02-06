namespace hogehogehoge {

  let car: {
    id: number // 必須
    name: string
    [key:number]: number
  }

  for(let i =0; i<10; i++) {

    car = {
      id: 1,
      name: "dog",
      [i]:i
    }
    console.log(car)
  }
  class Animal {
    id:number
    name: string
    length: number
    weight: number

    constructor(id: number, name:string, length:number, weight:number) {
      this.id = id;
      this.name = name;
      this.length = length;
      this.weight = weight;
    }
  }

  class Human extends Animal {
    matashita: number
    zakou: number

    constructor(id: number, name:string, length: number, weight: number,matashita:number, zakou: number) {
      super(id, name, length, weight);
      this.matashita = matashita;
      this.zakou = zakou;
    }
  }

  const michio = new Human(1,"michio", 174, 75,70,100);
  const katoono = new Human(2, "katoono",170,110,100,70);
  console.log(michio.name)
  console.log(katoono.zakou)

}

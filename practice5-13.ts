// 練習問題 p.116 3問目

namespace Shoes {

  /**
   * インターフェイスでもOK
   */
  type Shoe = {
    purpose: string,
    // create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe,
  }

  // interface Shoe {
  //   purpose: string
  // }

  class BalletFlat implements Shoe {
    purpose = 'dancing'
    // create(type: 'balletFlat'): BalletFlat {
    //   return new BalletFlat
    // }
  }

  class Boot implements Shoe {
    purpose = 'woodcutting'
    // create(type: 'boot'): Boot {
    //   return new Boot
    // }
  }

  class Sneaker implements Shoe {
    purpose = 'walking'
    // create(type: 'sneaker'): Sneaker {
    //   return new Sneaker
    // }
  }

  /**
   *  typeを間に挟み、create関数をオーバーロードさせる
   */
  type ShoeCreator = {
    create(type: 'balletFlat'): BalletFlat,
    create(type: 'boot'): Boot,
    create(type: 'sneaker'): Sneaker
  }

  const Shoe: ShoeCreator = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
      switch (type) {
        case 'balletFlat': return new BalletFlat
        case 'boot': return new Boot
        case 'sneaker': return new Sneaker
      }
    }
  }

  const boot = Shoe.create('boot')
  const balletFlat = Shoe.create('balletFlat')

}
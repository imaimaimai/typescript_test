// ファクトリーパターン p.113

/**
 * インターフェイスでもOK
 */
type Shoe = {
  purpose: string
}

// interface Shoe {
//   purpose: string
// }

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

const Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat': return new BalletFlat
      case 'boot': return new Boot
      case 'sneaker': return new Sneaker
    }
  }
}

console.log(Shoe.create('boot'));
// console.log(Shoe.create('hoge'));
type Color = 'red'

let x = Math.random() < .5

if (x) {
  type Color = 'blue'
  let b: Color = 'blue'
} else { 
  let c: Color = 'red'
}

const enum Flippable {
  Burger,
  Chair,
  Cup,
  Skateboard,
  Table
}

console.log(Flippable.Chair); // const enumをコンパイルするとインライン展開される。この場合は1になる

let h = null;
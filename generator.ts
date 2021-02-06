// ジェネレーター p.54 IEは未対応
function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while(true) {
    yield a;
    [a,b] = [b, a+b]
  }
}

let fibonacciGenerator = createFibonacciGenerator()

console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())


fibonacciGenerator[Symbol.iterator]

// numbersはiterable, Symiterator
let numbers = {
  *[Symbol.iterator](){
    for (let n = 1; n <=10; n++) {
      yield n
    }
  }
}

let number = {
  ["ok"]() {
    return "a"
  },
  okk: "b"
}

console.log([...numbers][0]);

const obj = {
  key1: "hoge",
  key2: "fuga"
}


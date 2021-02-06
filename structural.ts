// クラスの構造的型付け p.101

class Zebra {
  trot() {
    // console.log("hoga")
  }
}

class Poodle {
  trot() {
    console.log("hoge")
  }
}

function ambleAround(animal: Zebra) {
  animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle) // 構造が同じなのでエラーにならない

let a = 10000
function b() {}

type a = number
interface b extends c {
  e(): void
}

type c = {
  a(n: number): number
}

class d implements b {
  e(){
    return "f"
  }
  a(n:number) {
    return n
  }
}

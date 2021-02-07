// ミックスイン p.106

type ClassConstructor<T> = new(...args: any[]) => T

// function withEZDebug<C extends ClassConstructor>(Class:C) {
//   return class extends Class {
//     constructor(...args: any[]) { // constructorに追加のロジックが必要ない場合は省略できる
//       super(...args)
//     }
//   }
// }

function withEZDebug<C extends ClassConstructor<{
  getDebugValue(): object
}>>(Class: C) {
  return class extends Class {
        constructor(...args: any[]) { // constructorに追加のロジックが必要ない場合は省略できる
      super(...args)
        }
    debug() {
      let c = new Class()
      const Name = c.constructor.name // todo: 本ではthis.constructor.nameとなっているが、直上の無名クラスの値が出てしまう。基底クラスの値を得たいのであれば別のやり方が必要そう。
      console.log(Name)
      const value = c.getDebugValue()
      return `${Name} ( ${JSON.stringify(value)} )`
    }
  }
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName:string
  ){}

  getDebugValue() {
    return {
      id: this.id,
      name: `${this.firstName} ${this.lastName}`
    }
  }
}

class EasyToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName:string
  ){}

  getDebugValue() {
    return {
      id: this.id,
      name: `${this.firstName} ${this.lastName}`
    }
  }
}

const User = withEZDebug(HardToDebugUser)
const user = new User(3, 'Michio', 'Imai')
console.log(user.debug())
console.log(user.constructor.name)


// class Hoge {

// }

// class Fuga extends Hoge {

//   getClassName() {
//     return Fuga.name
//   }
// }

// const fuga = new Fuga()
// console.log(fuga.getClassName())

// class Piyo { }

// type ClassConstructor2 = new(...args: any[]) => {}

// function temp<C extends ClassConstructor2>(Class: C) {
//   return class extends Class {
//     debug() {
//       const Name = Class.name
//       return Name
//     }
//   }
// }

// const tempPiyo = temp(Piyo)
// const pi = new tempPiyo()
// console.log(pi.debug())


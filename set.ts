
namespace set  {

  const set = new Set
  set.add(1).add(2).add(3)
  set.has(2)
  set.has(4)

}

namespace set2 {

  class Set {
    has(value: number): boolean {
      return true
    }
    add(value:number): this { // thisを返すようにすれば、サブクラス側でthisがサブクラスを表すようになるので、オーバーライドする必要はなくなる
      return this
    }

    // add(value:number): Set { // 自分そのものを返したい時にこう書いてしまうと、
      
    // }
  }

  class MutableSet extends Set {
    delete(value: number): boolean {
      return true
    }

    // add(value:number): MutableSet { // 継承先でサブクラスを返すようオーバーライドしなければならなくなる

    // }


  }
}
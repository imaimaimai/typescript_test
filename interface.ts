// typeとinterfaceの違い p.96
namespace interface {

  interface A {
    good(x:number): string
    bad(x:number):string
  }

  interface B extends A { // AとBで型が一つもマッチしない状態で継承しようとする（この場合はbadのパラメータ部分）とコンパイルエラーになる
    good(x:string | number):string
    bad(x:string):string
  }

  interface A { // 同じ名前のinterfaceを複数宣言すると宣言のマージが起きる（エラーにはならない）
    normal(x:number): string
  }

  interface User<Age extends number> { // 宣言のマージの例。ジェネリックを宣言している場合は、ジェネリックの名前が違っていても、継承する型が違ってもコンパイルエラーになる
    age: Age
  }

  interface User<Age extends string> {
    name: Age
  }
}

namespace type {
  type A = {
    good(x:number):string
    bad(x:number):string
  }

  type B  = {
    good(x:number|string):string
    bad(x:string):string
  }

  type BandA = B & A  // 交差型の例。interfaceと違い、双方の型をマージしようとするのでコンパイルエラーを起こさない。また、型の式（& , |）をinterfaceの右辺で用いることはできない

  const banda: BandA = {
    good(x:number|string):string {
      return x.toString();
    },
    bad(x:number|string): string {
      return x.toString();
    }
  }

  // type A = {} // interfaceと違い、同じ名前のtypeを複数宣言するとコンパイルエラーになる

}
namespace impl {

  interface a {
    go(greeting: string): void
  }

  class b implements a {
    go(greeting: string) {
      console.log(greeting)
    }
  }

  const bb = new b

  bb.go("hello")

  interface Animal {
    readonly name:string
    eat(food:string):void
    sleep(hours: number): void

  }

  interface Feline {
    meow(): void
  }

  class Cat implements Animal,Feline {

    name = 'たま'
    eat(food:string) {
      console.info('Ate some', food, '. Mmm!')
    }

    sleep(hours: number) {
      console.info('Slept for', hours, 'hours')
    }

    meow() {
      console.info('死が二人を別つまで、僕らはずうっと一緒だよ。。。')
    }
  
  }

  const cat = new Cat

  cat.eat("りんご")
  cat.sleep(14)
  cat.meow()
}
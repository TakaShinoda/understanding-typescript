// プロパティと型を定義、初期値は設定できない
// オブジェクトの構造飲み
// interface Person {
//   name: string
//   age: number

//   greet(phrase: string): void
// }

// type Person = {
//   name: string
//   age: number

//   greet(phrase: string): void
// }

// type AddFn = (a: number, b: number) => number
interface AddFn {
  (a: number, b: number): number
}

let addd: AddFn

addd = (n1: number, n2: number) => {
  return n1 + n2
}

interface Named {
  readonly name?: string
  outputName?: string
}

// publicやprivateは使用できない typeでも同様 オブジェクトはinterfaceが一般的
// 継承: extends
//　カンマ区切りで複数検証可能 interface飲み named, another
interface Greetable extends Named {
  greet(phrase: string): void
}

// class名の後ろにimplemmentsインターフェースを実装する、複数か
class Person implements Greetable {
  name?: string
  age = 30

  constructor(n?: string) {
    if (n) {
      this.name = n
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name)
    } else {
      console.log('Hi!')
    }
  }
}

let user1: Greetable

user1 = new Person('Max')

user1.greet('Hello I am')
console.log(user1)

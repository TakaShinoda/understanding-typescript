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

// publicやprivateは使用できない typeでも同様 オブジェクトはinterfaceが一般的
interface Greetable {
  readonly name: string

  greet(phrase: string): void
}

// class名の後ろにimplemmentsインターフェースを実装する、複数か
class Person implements Greetable {
  name: string
  age = 30

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}

let user1: Greetable

user1 = new Person('Max')

user1.greet('Hello I am')
console.log(user1)

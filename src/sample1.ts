// const person = {
//   name: 'takahiro',
//   age: 25,
//   hobbies: ['Sports', 'Cooking'],
// }

function add2(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2
  }
  // return undefined
}

// let age: number
// age = 30

// console.log(person)

// const add = (a: number, b: number = 1) => a + b

// const PrintOutput: (output: string | number)=> void = output => {
//     console.log(output)
// }

// PrintOutput(add(2))

const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking']

activeHobbies.push(...hobbies)

const person = {
  firstName: 'Max',
  age: 30,
}

const copiedPerson = {
  ...person,
}

// redure('計算を行う関数', '初期値')
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers)

// デストラクチャリング
const [hobby1, hobby2, ...remainingHobbies] = hobbies
const { firstName, age } = person

console.log(firstName, age)
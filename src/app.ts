const person = {
    name: 'takahiro',
    age: 25,
    hobbies: ['Sports', 'Cooking']
}

function add2(n1: number, n2: number){
    if(n1 + n2 > 0) {
        return n1 + n2
    }
    // return undefined
}

let age: number
age = 30

console.log(person)


const add = (a: number, b: number = 1) => a + b


const PrintOutput: (output: string | number)=> void = output => {
    console.log(output)
}

PrintOutput(add(2))
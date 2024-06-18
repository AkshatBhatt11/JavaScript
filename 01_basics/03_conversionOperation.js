//let score = 11 // all output will be number

//let score = "12" // type will be string and can convert into number with output = 12

//let score = "13ac" // type will be string and can convert into number with output = "NaN"

let score = "ak" // type will be string and cannot convert into number with output = "NaN"

//let score = true // type will be boolean and can convert into number with output true=1 & false=0

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// 11 = 11
// 12ab = NaN
// true and "ak" = 1 & false and "" = 0

let isLogIn = ""
let booleanIsLogIn = Boolean(isLogIn)
console.log(booleanIsLogIn)

let someNumber = "14"
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
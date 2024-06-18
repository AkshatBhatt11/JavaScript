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


// *********** Operation ***********

let value = 3
let negValue = -value
console.log(negValue)

//Normal operation
console.log(2+2)
console.log(2-3)
console.log(2*5)
console.log(2**4)
console.log(4/2)
console.log(90%3)

//Add two string
let str1 = "hello "
let str2 = "akshat"

let str3 = str1 + str2
console.log(str3)

//Complex Operation
console.log("1" + 2) // output 12
console.log(1 + "2") // output 12
console.log("1" + 2 + 2) // output 122
console.log(1 + 2 + "2") // output 32

console.log( 3 + 4 * 5 / 6) // not readable code 

console.log(+true) // output 1
console.log(+"") // output 0 

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // not readable code

let gameCounter = 10
gameCounter++
console.log(gameCounter)// prefix and postfix
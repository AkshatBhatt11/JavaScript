const name = "akshat"
const age = 21

// Old method to run string in console
console.log(name + " is " + age + " years old.")

// New method to run string with PlaceHolder inside it.
console.log(`Hello my name is ${name} and I am ${age} years old.`);

const myName = new String("bhatt-tttttt")

console.log(myName[1])
console.log(myName.__proto__)

console.log(myName.length)// print total length of string
console.log(myName.toUpperCase())// print uppercase of string
console.log(myName.charAt(2))// print char of given position
console.log(myName.indexOf("t"))// print position of given char

const newStr = myName.substring(0, 3)// print from 0 to 2 not 3
console.log(newStr)

const otherStr = myName.slice(0, 5)// pirnt char from position 0 to 4(if second is 5 like (0, 5))
console.log(otherStr)

const newStr1 = "   ak  "
console.log(newStr1.trim())// print output without space or remove white space not line terminator

const url = "https://ak.com/home%2base"
console.log(url.replace("%2", "*"))// it replace %2 with * in output

console.log(url.includes("ak"))// it check that ak is their in url or not and gives output in true or false

console.log(myName.split("-"))// it split using - inside string


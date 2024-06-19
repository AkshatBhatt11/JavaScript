const score = 11
console.log(score)

const balance = new Number(12.012121)
console.log(balance)

console.log(balance.toString().length)// first convert to string and then it show the length of number
console.log(balance.toFixed(2))// it only show two digits after decimal

const othNum = 21.8987456
console.log(othNum.toPrecision(2))// it round off number +0.5 or -0.5

const hund = 10000
console.log(hund.toLocaleString("en-IN"))// it gives output in indian values

//*-*-*-*-*-*-*-*-*-*- Math -*-*-*-*-*-*-*-*-*-*

console.log(Math)
console.log(Math.abs(-4))// change - to + not + to -

console.log(Math.round(4.3))// it round off number +0.5 or -0.5

console.log(Math.ceil(4.2))// it gives next value after 4 its 5

console.log(Math.floor(4.9))// it ignore decimal point and gives current value

console.log(Math.sqrt(4))// it gives square root of input number

console.log(Math.min(4, 8, 9, 1))// it check given input and min number

console.log(Math.max(4, 8, 9, 1))// it check given input and max munber

console.log(Math.random())// generate random values between 0 to 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Primitive Datatype - Call by Value

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 11 //output type = number
const scoreValue = 12 //output type = number
console.log(typeof score);

const isLogIn = false //output type = boolean
console.log(typeof isLogIn);

const outSideTemp = null //output type = object
console.log(typeof outSideTemp);

let userMail; //output type = undefined
console.log(typeof userMail);

// Symbol gives unique data & output type = symbol
const id = Symbol('123')
const otherId = Symbol('123')
console.log(id == otherId)
console.log(typeof id);

// Big Int is declare using n at last of number
const bigNumber = 654654654654565465465465497n // output type = bigint
console.log(typeof bigNumber);




// Non-Primitive Datatype - Call by Reference

// 3 Types : Array, Object, Function

// Array declared & output type = object
const heros = ["ak", "vk", "mk"]
console.log(typeof heros);

// Object declared & output type = object
let myObj = {
    name: "ak",
    age: 21,
}
console.log(typeof myObj);

// Function declared & output type = function
const myFunction = function(){
    console.log("hello world")
}
console.log(typeof myFunction);
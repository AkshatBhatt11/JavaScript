// var = 15 //Never use VAR 
let c = 14 //global scope
if (true) { //value inside curly bracket is block scope
    let a = 11
    const b = 12
    // var c = 13
    console.log(a)//print value of block scope
}

console.log(c) //print value of global scope

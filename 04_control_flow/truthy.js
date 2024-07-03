// const userEmail = "abc@gmail.com"

// if (userEmail) {
//     console.log("Got user Email");
// } else {
//     console.log("dont have user Email");
// }

// false value - false, 0, -0, 0n(bigInt), "", null, undefined, NaN
// true value - true, 1, 'false', " ", "0", [], {}, function(){}

const empObj = {}

if (Object.keys(empObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 70
iceTeaPrice <= 80 ?/*if*/ console.log("less than 80") :/*else*/ console.log("more than 80");